import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyPage } from './pages/SurveyPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path={'/popout'} element={<div>Popout</div>} />
      </Routes>
    </Router>
  );
}

export default App;
