import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BiblePage } from './features/bible/BiblePage';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { DiaryPage } from './features/diary/DiaryPage';
import { LookupPage } from './features/lookup/LookupPage';
import { MedicinePage } from './features/medicine/MedicinePage';
import { MealPlanPage } from './features/meal-plan/MealPlanPage';
import { PrayersPage } from './features/prayers/PrayersPage';
import { ProfilePage } from './features/profile/ProfilePage';
import { RosaryPage } from './features/rosary/RosaryPage';
import { SettingsPage } from './features/settings/SettingsPage';
import { WeightPage } from './features/weight/WeightPage';
import { WorkoutsPage } from './features/workouts/WorkoutsPage';
import { AppLayout } from './layout/AppLayout';
import { ConfirmProvider } from './shared/components/ConfirmProvider';
import { ToastProvider } from './shared/components/ToastProvider';
import { AppDataProvider } from './store/AppDataContext';

// HashRouter keeps deep links working on GitHub Pages, which has no SPA fallback.
export const App = () => (
  <AppDataProvider>
    <ToastProvider>
      <ConfirmProvider>
        <HashRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="diary" element={<DiaryPage />} />
              <Route path="lookup" element={<LookupPage />} />
              <Route path="meal-plan" element={<MealPlanPage />} />
              <Route path="workouts" element={<WorkoutsPage />} />
              <Route path="weight" element={<WeightPage />} />
              <Route path="medicine" element={<MedicinePage />} />
              <Route path="bible" element={<BiblePage />} />
              <Route path="prayers" element={<PrayersPage />} />
              <Route path="rosary" element={<RosaryPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </ConfirmProvider>
    </ToastProvider>
  </AppDataProvider>
);
