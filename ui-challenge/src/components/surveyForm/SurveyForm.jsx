import { useState } from "react"
import axioClient from "../../config/axiosClient"



//Images
import FormImage from "../../img/img-form.svg"

import "./SurveyForm.css"
const SurveyForm = () => {

    const [survey, setSurvey] = useState(
        localStorage.getItem("survey") ?
            JSON.parse(localStorage.getItem("survey")) :
            { questionOne: "", questionTwo: "" }
    );
    const submitSurvey = async () => {
        try {
            const response = await axioClient.post("", survey);
            const { data } = response;
            return data;
        } catch (error) {

        }
    }
    const hanelOnChange = (e) => {
        setSurvey({
            ...survey,
            [e.target.name]: e.target.value
        })
        const surveyClone = { ...survey }
        surveyClone[e.target.name] = e.target.value
        localStorage.setItem("survey", JSON.stringify(surveyClone));
    }
    const handleOnSubmit = async(e) => {
        e.preventDefault();
        const added = await submitSurvey();
        if (added.hasOwnProperty("msg")) {
            setSurvey({ questionOne: "", questionTwo: "" })
            localStorage.removeItem("survey")
        }

    }

    return (
        <form className="surveyForm"
            onSubmit={handleOnSubmit}
        >
            <fieldset>
                <div className="surveyForm__img">
                    <img src={FormImage} alt="Image form" />
                    <h2>Track your wellness</h2>
                </div>
                <div className="surveyForm__options">
                    <h3>How do you feel?</h3>
                    <div className="options">
                        <label className="option">
                            <input type="radio" name="questionOne" value={"one"}
                                onChange={hanelOnChange}
                                checked={survey?.questionOne == "one" ? true : false}
                            />
                            <p>Perfect, thank you!</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"two"}
                                onChange={hanelOnChange}
                                checked={survey?.questionOne == "two" ? true : false}
                            />
                            <p>Meh, I’m alive</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"three"}
                                onChange={hanelOnChange}
                                checked={survey?.questionOne == "three" ? true : false}
                            />
                            <p>Worst day ever</p>
                        </label>
                    </div>
                </div>
                <div className="surveyForm__options">
                    <h3>Did you sleep well?</h3>
                    <div className="options">
                        <label className="option">
                            <input type="radio" name="questionTwo" value={"one"}
                                onChange={hanelOnChange}
                                checked={survey?.questionTwo == "one" ? true : false}
                            />
                            <p>Yes</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionTwo" value={"two"}
                                onChange={hanelOnChange}
                                checked={survey?.questionTwo == "two" ? true : false}
                            />
                            <p>No</p>
                        </label>
                    </div>
                </div>

                <div className="submitButton">
                    <input type="submit" value={"Submit"} />
                </div>
            </fieldset>
        </form>
    )
}

export default SurveyForm