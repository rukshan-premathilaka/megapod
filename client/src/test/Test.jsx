import React, { useState } from "react";
import Container from "../component/Container.jsx";


function Test() {
    const [walletAvailable, setWalletAvailable] = useState(false);
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    const checkWallet = () => {
        if (window.cardano && window.cardano.lace) {
            setWalletAvailable(true);
            console.log("Lace wallet is available");
        } else {
            alert("Lace wallet not found. Please install it.");
        }
    };

    const connectWallet = async () => {
        try {
            const lace = await window.cardano.lace.enable(); // opens popup
            setConnected(true);

            const usedAddresses = await lace.getUsedAddresses();
            const address = usedAddresses[0]; // pick the first address
            const displayAddress = address.substring(0, 10) + "..." + address.substring(address.length - 10);
            setWalletAddress(displayAddress);

            setWalletAddress(address);
        } catch (err) {
            console.error("User rejected connection", err);
        }
    };

    return (
        <div style={{ padding: "2rem" }}>
            <button onClick={checkWallet}>Check Wallet</button>

            {walletAvailable && !connected && (
                <button onClick={connectWallet} style={{ marginLeft: "1rem" }}>
                    Connect Lace Wallet
                </button>
            )}

            {connected && (
                <div>
                    <p>✅ Wallet Connected!</p>
                    <p><strong>Address:</strong> {walletAddress}</p>
                </div>
            )}
        </div>
    );
}

export default Test;