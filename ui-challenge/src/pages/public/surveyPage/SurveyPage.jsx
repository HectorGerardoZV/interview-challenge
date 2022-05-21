
//Components
import SurveyForm from "../../../components/surveyForm/SurveyForm"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


import "./SurveyPage.css"
const SurveyPage = () => {
    return (
        <>
            <header className="surveyPage__header">
                <h1>Answer the survey</h1>
            </header>

            <main className="surveyPage__mainContent">
                <SurveyForm />
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