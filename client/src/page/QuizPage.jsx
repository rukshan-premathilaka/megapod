import { useState } from 'react';
import { FaStar} from "react-icons/fa";
import Container from "../component/Container.jsx";
import Question from "../component/Question.jsx";
import StatusBar from "../component/StatusBar.jsx";
import Navbar from "../component/Navbar.jsx";


export default function QuizPage() {

    const quizData = [
        {
            question: "What does 'block' mean in blockchain?",
            options: [
                "A digital storage unit",
                "A security wall",
                "A coding error",
                "A block of metal"
            ]
        },
        {
            question: "Which one is a popular blockchain?",
            options: [
                "Ethereum",
                "Chrome",
                "YouTube",
                "Ubuntu"
            ]
        },
        {
            question: "What is the purpose of cryptography?",
            options: [
                "Design user interfaces",
                "Create images",
                "Secure communication",
                "Run advertisements"
            ]
        },
        {
            question: "What is the purpose of cryptography?",
            options: [
                "Design user interfaces",
                "Create images",
                "Secure communication",
                "Run advertisements"
            ]
        }
    ];

    const lenthOfQuiz = quizData.length;
    console.log(lenthOfQuiz);

    const [current, setCurrent] = useState(0);             // Current question index
    const [selected, setSelected] = useState(null);        // Selected option index
    const [answers, setAnswers] = useState([]);            // Stores selected answers

    const handleNext = () => {
        if (selected === null) {
            alert("Please select an answer first!");
            return;
        }

        const updatedAnswers = [...answers];
        updatedAnswers[current] = selected;
        setAnswers(updatedAnswers);

        if (current < quizData.length - 1) {
            setCurrent(current + 1);
            setSelected(updatedAnswers[current + 1] ?? null);
        } else {
            console.log("All answers:", updatedAnswers);
            alert("Quiz finished!");
        }
    };

    const quiz = quizData[current];

    return (
        <Container>

            <Navbar />

            {/* Quiz container */}
            <div className="w-full px-4 lg:px-8 pt-8">

                {/* Header buttons */}
                <div className="flex flex-row justify-between items-center mb-20">
                    <button className="bg-white hover:bg-yellow-400 text-rose-600 font-bold md:text-2xl py-1 px-6 md:px-12 rounded-4xl">
                        Level <span>{current + 1}</span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white hover:bg-yellow-400 text-rose-600 font-bold md:text-2xl py-1 px-6 md:px-12 rounded-4xl"
                    >
                        {current === quizData.length - 1 ? "Finish" : "Let’s Go"}
                    </button>
                </div>

                {/* Question */}
                <Question quiz={quiz} selected={selected} setSelected={setSelected} />

                {/* Status bar */}
                <StatusBar current={current} total={quizData.length} />

            </div>
        </Container>
    );
}



