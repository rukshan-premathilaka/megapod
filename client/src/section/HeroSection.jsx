import { useNavigate } from 'react-router-dom';


export default function HeroSection() {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/quiz');
    };

    return (
        <div className="hero w-full h-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <button className="bg-white hover:bg-yellow-400 text-rose-600 font-bold text-2xl
                    py-5 px-12 transition rounded-4xl hover:cursor-pointer"
                        onClick={handleStart}
                >
                    GET STARTED
                </button>
            </div>
        </div>
    );
}