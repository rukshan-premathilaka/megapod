import Container from "../component/Container.jsx";
import Logo from "../component/Logo.jsx";


function Dashboard() {


    return(
        <Container>
            <Logo />

            <div className="mt-20 flex flex-col items-center justify-center">
                <h1 className="text-8xl font-bold text-white mb-4">YOUR RANK</h1>
                <div className="w-[300px] h-[300px] bg-white overflow-hidden rounded-full flex items-center justify-center"></div>
                <p className="text-2xl mt-4 text-white">Level 01 Player</p>
                <button className="px-12 py-4 mt-8 bg-white hover:bg-yellow-400 text-rose-600 font-bold cursor-pointer rounded-4xl">Start Now</button>
            </div>
        </Container>
    )
}

export default Dashboard;