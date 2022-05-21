
import LoginImageForm from "../../img/img-login-form.svg"

import "./LoginForm.css"
const LoginForm = () => {
    return (
        <form className="loginForm">
            <fieldset>
                <div className="loginForm__img">
                    <img src={LoginImageForm} alt="login image" />
                </div>
                <div className="loginForm__input">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Your username..." />
                </div>
                <div className="loginForm__input">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Your password..." />
                </div>
                <div className="loginForm__submit">
                    <input type="submit" value={"Login"} />
                </div>
            </fieldset>
        </form>
    )
}

export default LoginForm