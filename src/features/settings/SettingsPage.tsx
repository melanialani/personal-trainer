import { Database, Download, RotateCcw, Sparkles, Upload } from 'lucide-react';
import { useRef, useState, type ChangeEvent } from 'react';
import { createEmptyData, exportData, mergeData, parseImportFile } from '../../lib/storage';
import { formatNumber } from '../../lib/format';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/Card';
import { useConfirm } from '../../shared/components/ConfirmProvider';
import { Modal } from '../../shared/components/Modal';
import { PageHeader } from '../../shared/components/PageHeader';
import { ThemeSegmented } from '../../shared/components/ThemeToggle';
import { useToast } from '../../shared/components/ToastProvider';
import { useAppData } from '../../store/AppDataContext';
import type { AppData } from '../../types';
import { useLoadSampleData } from '../../shared/hooks/useLoadSampleData';

const summarize = (data: AppData) => [
  { label: 'Profile', value: data.profile ? data.profile.name : 'Not set' },
  { label: 'Weigh-ins', value: formatNumber(data.weights.length) },
  { label: 'Food diary entries', value: formatNumber(data.foodLog.length) },
  { label: 'Workouts logged', value: formatNumber(data.workoutLog.length) },
  { label: 'Custom foods', value: formatNumber(data.customFoods.length) },
  { label: 'Meal plan', value: data.mealPlan ? `${data.mealPlan.days.length} days` : 'None' },
  { label: 'Workout plan', value: data.workoutPlan ? 'Yes' : 'None' },
];

const SummaryList = ({ data }: { data: AppData }) => (
  <dl className="divide-y divide-slate-100 text-sm">
    {summarize(data).map((row) => (
      <div key={row.label} className="flex justify-between py-2">
        <dt className="text-slate-500">{row.label}</dt>
        <dd className="font-medium text-slate-900">{row.value}</dd>
      </div>
    ))}
  </dl>
);

export const SettingsPage = () => {
  const { data, update } = useAppData();
  const confirm = useConfirm();
  const showToast = useToast();
  const loadSampleData = useLoadSampleData();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pendingImport, setPendingImport] = useState<AppData | null>(null);

  const sizeKb = new Blob([JSON.stringify(data)]).size / 1024;

  const handleExport = () => {
    exportData(data);
    showToast('Backup downloaded');
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      setPendingImport(parseImportFile(await file.text()));
    } catch (err) {
      showToast((err as Error).message, 'error');
    }
  };

  const handleApplyImport = (mode: 'merge' | 'replace') => {
    if (!pendingImport) return;
    const incoming = pendingImport;
    update((current) => (mode === 'merge' ? mergeData(current, incoming) : incoming));
    setPendingImport(null);
    showToast(mode === 'merge' ? 'Backup merged' : 'Backup restored');
  };

  const handleReset = async () => {
    const isConfirmed = await confirm({
      title: 'Delete all data?',
      message: 'Your profile, logs and plans will be permanently removed from this browser. Export a backup first if you might need them.',
      confirmLabel: 'Delete everything',
      isDestructive: true,
    });
    if (!isConfirmed) return;
    update(() => createEmptyData());
    showToast('All data deleted');
  };

  return (
    <>
      <PageHeader title="Data & Settings" description="Everything is stored only in this browser. Export a backup to move it to another device." />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="Backup" subtitle="Export to a JSON file, import it on any device or browser">
          <div className="flex flex-wrap gap-2">
            <Button icon={<Download size={16} />} onClick={handleExport}>
              Export data
            </Button>
            <Button variant="secondary" icon={<Upload size={16} />} onClick={() => fileInputRef.current?.click()}>
              Import backup
            </Button>
            <input ref={fileInputRef} type="file" accept="application/json,.json" className="hidden" onChange={handleFileChange} />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Tip: browsers may clear site data when storage runs low or after long inactivity. Export a backup regularly, e.g. once a week.
          </p>
        </Card>

        <Card
          icon={<Database size={16} />}
          title="Stored in this browser"
          subtitle={`About ${formatNumber(sizeKb, 1)} KB`}
        >
          <SummaryList data={data} />
        </Card>

        <Card title="Appearance" subtitle="System follows your phone or computer setting. Saved on this device only.">
          <div className="max-w-xs">
            <ThemeSegmented />
          </div>
        </Card>

        <Card title="Sample data" subtitle="Explore the app with six weeks of realistic example data">
          <Button variant="secondary" icon={<Sparkles size={16} />} onClick={loadSampleData}>
            Load sample data
          </Button>
        </Card>

        <Card title="Danger zone">
          <Button variant="danger" icon={<RotateCcw size={16} />} onClick={handleReset}>
            Delete all data
          </Button>
        </Card>
      </div>

      <Modal
        isOpen={pendingImport !== null}
        title="Import backup"
        description="Choose how to apply this backup."
        onClose={() => setPendingImport(null)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setPendingImport(null)}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={() => handleApplyImport('merge')}>
              Merge with current
            </Button>
            <Button variant="danger" onClick={() => handleApplyImport('replace')}>
              Replace all
            </Button>
          </>
        }
      >
        {pendingImport && <SummaryList data={pendingImport} />}
        <ul className="mt-4 space-y-1 text-xs text-slate-500">
          <li>
            <span className="font-medium text-slate-700">Merge</span> keeps your current records and adds the ones from the file (the file wins on duplicates).
          </li>
          <li>
            <span className="font-medium text-slate-700">Replace all</span> deletes current data and uses only the file.
          </li>
        </ul>
      </Modal>
    </>
  );
};
