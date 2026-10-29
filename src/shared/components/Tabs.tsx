interface TabsProps<T extends string> {
  tabs: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

/** Full-width equal tabs on phones, compact inline tabs from `sm` up. */
export const Tabs = <T extends string>({ tabs, value, onChange }: TabsProps<T>) => (
  <div className="scrollbar-none flex w-full max-w-full gap-1 overflow-x-auto rounded-xl bg-slate-100 p-1 sm:inline-flex sm:w-auto">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        onClick={() => onChange(tab.value)}
        className={`flex-1 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors sm:flex-none sm:px-3 ${
          tab.value === value ? 'bg-raised text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
