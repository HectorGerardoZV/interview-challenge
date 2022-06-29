import {ethers} from "ethers" 
import { contractABI, contractAddress } from "../../utilities/constants"
const { ethereum } = window;
//import Web3 from "web3"

const getEthereumContract = () => {
    try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        return transactionContract;
    } catch (error) {
        console.log(error);
    }
}

const registerUserBlockchain = async () => {
    try {
        const contract = getEthereumContract();
        const response = await contract.registerUser(1);
        const info = await response.wait();
        console.log(info);
    } catch (error) {
        console.log(error);
    }
}

const addSurveyBlockchain = async (data) => {
    try {
        const contract = getEthereumContract();
        const values = Object.values(data);
        let info = values[0] + "," + values[1];
        info = ethers.utils.formatBytes32String(info);
        const result = await contract.addHealthData(info);
        const success = await result.wait();
        return success;
    } catch (error) {
        console.log(error);
    }
}

const getHealthDataBlockchain = async () => {
    try {
        const contract = getEthereumContract();
        const results = await contract.getHealthData();
        const elements = [];
        for (let i = 0; i < results.length; i += 2) {
            const element = ethers.utils.toUtf8String(results[i]);
            elements.push(element)
        }
        return elements;
    } catch (error) {
        console.log(error);
        setBlockchainResults([]);
    }
}


const getHealthDataBlockchainTest= async() =>{  
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const contract =new  web3.eth.Contract(contractABI, contractAddress, {from: "0x37Eaa3c8F750d1f8DCE3D682c7B6cf46Bb4E56DD"})
        return new Promise((resolve, reject) => {
            contract.methods.getHealthData().call(function (error, result) {
                if(!error)
                    resolve({result})
                else
                    reject(error.code)  
            })
        })
}
const addSurveyBlockchainTest = async(survey)=>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const contract =new  web3.eth.Contract(contractABI, contractAddress, {from: "0x37Eaa3c8F750d1f8DCE3D682c7B6cf46Bb4E56DD"})
    return new Promise((resolve, reject) => {
        contract.methods.addHealthData(ethers.utils.formatBytes32String(survey)).send(function (error, result) {
            if(!error)
                resolve({result})
            else
                reject(error.code)  
        })
    })
}
const registerUserBlockchainTest = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const contract =new  web3.eth.Contract(contractABI, contractAddress, {from: "0x37Eaa3c8F750d1f8DCE3D682c7B6cf46Bb4E56DD"})
    return new Promise((resolve, reject) => {
        contract.methods.registerUser(1).send(function (error, result) {
            if(!error)
                resolve({result})
            else
                reject(error.code)  
        })
    })
}





export {
    registerUserBlockchain,
    addSurveyBlockchain,
    getHealthDataBlockchain,
    getHealthDataBlockchainTest,
    addSurveyBlockchainTest,
    registerUserBlockchainTest
}