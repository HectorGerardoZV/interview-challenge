
//Components
import SurveyForm from "../../../components/surveyForm/SurveyForm"


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
        </>
    )
}

export default SurveyPage