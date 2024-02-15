import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SurveyPage } from "./pages/SurveyPage";
import { AdminPage } from "./pages/AdminPage";
import { useEffect } from "react";

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
    useEffect(() => {
        setScreenSize();
    });
    return (
        <Router>
            <Routes>
                <Route path="/survey" element={<SurveyPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;
