import { createContext, useEffect, useState } from "react"
import { ethers } from "ethers"
const { ethereum } = window;

const WalletContext = createContext();

/**
 * Methods
 * 
 * registerUser (uint level)
 * addHealthData (bytes32 data)
 * getHealthData ()
 * 
 */


const WalletProvider = ({ children }) => {

    const [wallet, setWallet] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [connecting, setConnecting] = useState(false);


    const isConnectedWallet = () => {
        try {
            const connected = ethereum.selectedAddress;
            if (!connected) {
                setIsConnected(false);
            } else {
                setIsConnected(true);
            }
        } catch (error) {
            setIsConnected(false);
        }
    }

    const connectWallet = async () => {
        try {
            setConnecting(true);
            const wallets = await ethereum.request({ method: "eth_requestAccounts" });
            const walletSelected = wallets[0];
            setWallet(walletSelected);
            isConnectedWallet();
            setConnecting(false);
            
        } catch (error) {
            setWallet(null);
            setConnecting(false);
        }
    }
    const registerUserBlockchain = async () => {

    }
    const addSurveyBlockchain = async () => {

    }


    useEffect(() => {
        isConnectedWallet();
    }, [wallet]);


    return (
        <WalletContext.Provider
            value={{
                wallet,
                isConnected,
                connecting,
                connectWallet,
                isConnectedWallet
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}


export { WalletProvider }
export default WalletContext