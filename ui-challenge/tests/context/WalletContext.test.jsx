import { ethers } from "ethers"
const { ethereum } = window;
import { contractABI, contractAddress } from "../../src/utilities/constants"

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
}


describe('Testing contract functionality', () => {

    test('Testing the method registerUserBlockchain()', async () => {
        
    });


});