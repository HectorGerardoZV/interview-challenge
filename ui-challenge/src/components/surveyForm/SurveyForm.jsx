

//Images
import FormImage from "../../img/img-form.svg"

import "./SurveyForm.css"
const SurveyForm = () => {
    return (
        <form className="surveyForm">
            <fieldset>
                <div className="surveyForm__img">
                    <img src={FormImage} alt="Image form" />
                    <h2>Track your wellness</h2>
                </div>
                <div className="surveyForm__options">
                    <h3>How do you feel?</h3>
                    <div className="options">
                        <label className="option">
                            <input type="radio" name="questionOne" value={"one"} />
                            <p>Perfect, thank you!</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"two"} />
                            <p>Meh, I’m alive</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionOne" value={"three"} />
                            <p>Worst day ever</p>
                        </label>
                    </div>
                </div>
                <div className="surveyForm__options">
                    <h3>Did you sleep well?</h3>
                    <div className="options">
                        <label className="option">
                            <input type="radio" name="questionTwo" value={"one"} />
                            <p>No</p>
                        </label>
                        <label className="option">
                            <input type="radio" name="questionTwo" value={"two"} />
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