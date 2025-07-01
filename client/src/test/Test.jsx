import React, { useState } from "react";
import Container from "../component/Container.jsx";


function Test() {
    const [walletAvailable, setWalletAvailable] = useState(false);
    const [connected, setConnected] = useState(false);

    // Check if Lace wallet is installed
    const checkWallet = () => {
        if (window.cardano && window.cardano.lace) {
            setWalletAvailable(true);
            console.log("Lace wallet is available");
        } else {
            alert("Lace wallet not found. Please install it.");
        }
    };

    // Connect to the wallet
    const connectWallet = async () => {
        try {
            await window.cardano.lace.enable(); // This opens the Lace popup
            setConnected(true);
            console.log("Wallet connected");
        } catch (err) {
            console.error("User rejected connection", err);
        }
    };

    return (
        <Container>
            <div style={{ padding: "2rem" }}>
                <button onClick={checkWallet}>Check Wallet</button>

                {walletAvailable && !connected && (
                    <button onClick={connectWallet} style={{ marginLeft: "1rem" }}>
                        Connect Lace Wallet
                    </button>
                )}

                {connected && <p>✅ Wallet Connected!</p>}
            </div>
        </Container>

    );
}

export default Test;