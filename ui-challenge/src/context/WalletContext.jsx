import { createContext, useEffect, useState } from "react"
const WalletContext = createContext();
import {
    registerUserBlockchain,
    addSurveyBlockchain,
    getHealthDataBlockchain
} from "./helpers/WalletHelpers"
/**
 * ---->Methods<----
 * registerUser (uint level)
 * addHealthData (bytes32 data)
 * getHealthData ()
 */
const { ethereum } = window;

const WalletProvider = ({ children }) => {
    const [wallet, setWallet] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [blockchainResults, setBlockchainResults] = useState([]);

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
            registerUserBlockchain();
        } catch (error) {
            setWallet(null);
            setConnecting(false);
        }
    }
    const handleQueryDataBlockchain = async () => {
        try {
            const result = await getHealthDataBlockchain();
            setBlockchainResults(result);
        } catch (error) {

        }
    }
    useEffect(() => {
        isConnectedWallet();
        handleQueryDataBlockchain();
    }, [wallet]);


    return (
        <WalletContext.Provider
            value={{
                wallet,
                isConnected,
                connecting,
                blockchainResults,
                connectWallet,
                isConnectedWallet,
                addSurveyBlockchain,
                getHealthDataBlockchain
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}


export { WalletProvider }
export default WalletContext