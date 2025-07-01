import { useState } from "react";
import Container from "../component/Container.jsx";
import BGanimeted from "../component/BGanimeted.jsx";
import Logo from "../component/Logo.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email,
            password
        };

        console.log(payload)
        try {
            const response = await fetch("http://localhost:3000/user/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                console.log("Response:", data);
                // Do something, like redirect to dashboard
            } else {
                alert(data.message || "Login failed!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <BGanimeted />
            </div>
            <div className="absolute top-4 left-8 z-20">
                <Logo />
            </div>

            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-8xl font-bold text-white mb-4">LOGIN HERE</h1>

                <form
                    onSubmit={handleSubmit}
                    className="md:scale-125 p-8 mt-10 backdrop-blur-xs rounded-[3rem] flex flex-col items-center justify-center bg-white/25"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        required
                        className="p-4 rounded-4xl mb-4 w-80 bg-white/75"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                        required
                        className="p-4 rounded-4xl mb-4 w-80 bg-white/75"
                    />

                    <button
                        type="submit"
                        className="mt-10 bg-rose-600 hover:bg-yellow-400 hover:text-black text-white font-bold py-4 px-20 rounded-4xl transition duration-300"
                    >
                        Login
                    </button>
                    <a className="mt-4 text-white font-bold hover:underline" href="/register">
                        Create an account
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;
