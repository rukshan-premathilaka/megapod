import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./page/home.jsx";
import QuizPage from "./page/QuizPage.jsx";
import Game from "./page/game.jsx";
import Test from "./test/Test.jsx";

function App() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/test" element={<Test />} />
        </Routes>

    );
}

export default App
