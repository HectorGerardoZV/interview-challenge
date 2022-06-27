import { createContext, useState, useContext } from "react";
import WalletContext from "./WalletContext";
import axioClient from "../config/axiosClient"
import { toast } from "react-toastify"
const SurveyContext = createContext();

const SurveyProvider = ({ children }) => {
    const {addSurveyBlockchain} = useContext(WalletContext);
    const [survey, setSurvey] = useState(
        localStorage.getItem("survey") ?
            JSON.parse(localStorage.getItem("survey")) :
            { questionOne: "", questionTwo: "" }
    );
    const submitSurvey = async () => {
        try {
            addSurveyBlockchain(survey);
            const response = await axioClient.post("/survey", survey);
            const { data } = response;
            await addSurveyBlockchain(survey);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const hanelOnChangeSurvey = (e) => {
        setSurvey({
            ...survey,
            [e.target.name]: e.target.value
        })
        const surveyClone = { ...survey }
        surveyClone[e.target.name] = e.target.value
        localStorage.setItem("survey", JSON.stringify(surveyClone));
    }
    const handleOnSubmitSurvey = async (e) => {
        e.preventDefault();
        const added = await submitSurvey();
        if (added.hasOwnProperty("msg")) {
            setSurvey({ questionOne: "", questionTwo: "" })
            localStorage.removeItem("survey")
            toast.success(`Thank you for answering the survey, your answer was sent`, {
                className: "toast-custom",
                progressClassName: "toast-progress",
                closeButton: false,
                icon: false
            })

        }


    }

    return (
        <SurveyContext.Provider
            value={{
                survey,
                hanelOnChangeSurvey,
                handleOnSubmitSurvey
            }}
        >
            {children}
        </SurveyContext.Provider>
    )
}

export { SurveyProvider }
export default SurveyContext