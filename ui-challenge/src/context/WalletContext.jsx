import { createContext, useEffect, useState } from "react"
const WalletContext = createContext();
/**
 * Methods
 * 
 * registerUser (uint level)
 * addHealthData (bytes32 data)
 * getHealthData ()
 * 
 */

import { ethers } from "ethers"
const { ethereum } = window;
import {contractABI,contractAddress} from "../utilities/constants"
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
}

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
            registerUserBlockchain(walletSelected); 
        } catch (error) {
            setWallet(null);
            setConnecting(false);
        }
    }
    const registerUserBlockchain = async (user) => {
        try {
            const contract = getEthereumContract();
            await contract.registerUser(1);
        } catch (error) {
            console.log(error);
        }
    }
    const addSurveyBlockchain = async (data) => {
        try {
            const contract = getEthereumContract();
            const values = Object.values(data);
            let info = values[0]+","+values[1];
            info = ethers.utils.formatBytes32String(info);
            const result = await contract.addHealthData(info);
            console.log(result);

        } catch (error) {
            
        }
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
                isConnectedWallet,
                addSurveyBlockchain
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}


export { WalletProvider }
export default WalletContext