import { useContext } from "react"

//Components
import SurveyForm from "../../../components/surveyForm/SurveyForm"
import ConnectWallet from "../../../components/ConnectWallet/ConnectWallet"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Context
import WalletContext from "../../../context/WalletContext"

import "./SurveyPage.css"
const SurveyPage = () => {
    const { isConnected } = useContext(WalletContext);


    return (
        <>
            <header className="surveyPage__header">
                <h1>Answer the survey</h1>
            </header>

            <main className="surveyPage__mainContent">
                {isConnected ? <SurveyForm /> : <ConnectWallet />}
            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default SurveyPage