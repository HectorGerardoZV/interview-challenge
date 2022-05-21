
//Hooks
import useSurvey from "../../hooks/useSurvey"

//Images
import FormImage from "../../img/img-form.svg"

import "./SurveyForm.css"
const SurveyForm = () => {

    const { survey, hanelOnChangeSurvey, handleOnSubmitSurvey } = useSurvey()


    return (
        <form className="surveyForm"
            onSubmit={handleOnSubmitSurvey}
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
                                onChange={hanelOnChangeSurvey}
                                checked={survey?.questionOne == "one" ? true : false}
                            />
                            <p>Perfect, thank you!</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"two"}
                                onChange={hanelOnChangeSurvey}
                                checked={survey?.questionOne == "two" ? true : false}
                            />
                            <p>Meh, I’m alive</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"three"}
                                onChange={hanelOnChangeSurvey}
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
                                onChange={hanelOnChangeSurvey}
                                checked={survey?.questionTwo == "one" ? true : false}
                            />
                            <p>Yes</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionTwo" value={"two"}
                                onChange={hanelOnChangeSurvey}
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