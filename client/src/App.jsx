import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from "./page/home.jsx";
import QuizPage from "./page/QuizPage.jsx";
import Game from "./page/game.jsx";
import Test from "./test/Test.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import NotFound from "./page/NotFound.jsx";
import AfterRegister from "./page/AfterRegister.jsx";
import Dashboard from "./page/Dashboard.jsx";
import NFTCollection from "./page/NFTCollection.jsx";


function App() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/afterregister" element={<AfterRegister/>} />
            <Route path="/dashboard" element={<Dashboard /> } />
            <Route path="/nftcollection" element={<NFTCollection />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    );
}

export default App
