import { Routes, Route, Navigate } from 'react-router-dom';
import ResumeBuilderPage from './pages/ResumeBuilderPage.jsx';
import JobMatchingAnalysisPage from './pages/JobMatchingAnalysisPage.jsx';
import AutoApplyPage from "./pages/AutoApplyPage.jsx";
import ADUGUPage from "./pages/AduguPage.jsx";

export default function App() {
  return <Routes>
    <Route path="/" element={<ADUGUPage />} />
    <Route path="/job-matching-analysis" element={<JobMatchingAnalysisPage />} />
    <Route path="/job-match-analysis" element={<Navigate to="/job-matching-analysis" replace />} />
    <Route path="/ai-resume-builder" element={<ResumeBuilderPage />} />
    <Route path="/adugu-ai-assistant" element={<ADUGUPage />} />
    <Route
      path="/auto-apply"
      element={<AutoApplyPage />}
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}



// Add inside your existing <Routes>:

