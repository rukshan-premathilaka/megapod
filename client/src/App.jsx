import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./page/home.jsx";
import QuizPage from "./page/QuizPage.jsx";

function App() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
        </Routes>

    );
}

export default App
