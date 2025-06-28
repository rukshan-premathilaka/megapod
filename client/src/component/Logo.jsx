import Logosvg from "../assets/logo.svg?react";

export default function Logo() {
    return (
        <img src={Logosvg} alt="Logo" className="w-10 h-10 mr-2" />
    )
}