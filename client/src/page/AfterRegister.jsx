import BGanimeted from "../component/BGanimeted.jsx";
import Logo from "../component/Logo.jsx";


function AfterRegister() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <BGanimeted />
            </div>
            <div className="absolute top-4 left-8 z-20">
                <Logo />
            </div>


            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-8xl font-bold text-white mb-4">HELLO USER!</h1>

                <p className="text-white text-2xl">Let's Connect Your Wallet and Withdraw Your Medals</p>

                <button className="mt-10 bg-white hover:bg-yellow-400 hover:text-black text-rose-600 cursor-pointer font-bold py-4 px-20 rounded-4xl transition duration-300">
                    Connect Your Wallet
                </button>
                <a className="mt-4 text-white font-bold hover:underline" href="/register">Skip for now</a>

            </div>

        </div>
    )
}

export default AfterRegister;