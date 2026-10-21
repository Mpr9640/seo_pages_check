
import { Routes, Route, Navigate } from 'react-router-dom';

import ResumeBuilderPage from './pages/ResumeBuilderPage.jsx';
import JobMatchingAnalysisPage from './pages/JobMatchingAnalysisPage.jsx';
import AutoApplyPage from './pages/AutoApplyPage.jsx';
import ADUGUPage from './pages/AduguPage.jsx';
import JobApplicationTrackerPage from './pages/JobApplicationTrackerPage.jsx';
import ChromeExtensionPage from './pages/ChromeExtensionPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<ADUGUPage />}
      />


      <Route
        path="/adugu-ai-job-search-assistant"
        element={<ADUGUPage />}
      />

      <Route
        path="/adugu-ai-assistant"
        element={
          <Navigate to="/adugu-ai-job-search-assistant" replace />
        }
      />


      <Route
        path="/job-matching-analysis"
        element={<JobMatchingAnalysisPage />}
      />

      <Route
        path="/job-match-analysis"
        element={
          <Navigate to="/job-matching-analysis" replace />
        }
      />

      <Route
        path="/job-application-tracker"
        element={<JobApplicationTrackerPage />}
      />
      <Route
        path="/chrome-extension"
        element={<ChromeExtensionPage />}
      />

      <Route
        path="/ai-resume-builder"
        element={<ResumeBuilderPage />}
      />

      <Route
        path="/auto-apply"
        element={<AutoApplyPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}
