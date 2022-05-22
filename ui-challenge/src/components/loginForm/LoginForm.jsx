import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//Hooks
import useAuth from "../../hooks/useAuth"

//Images
import LoginImageForm from "../../img/img-login-form.svg"

import "./LoginForm.css"
const LoginForm = () => {
    let navigate = useNavigate()
    const {
        credentials,
        handleOnChangeCredentials,
        handleOnSubmitCredentials,
        queryValidateToken
    } = useAuth()
    const goToAdmin = async () => {
        const token = JSON.parse(localStorage.getItem("token"))
        const goodToken = await queryValidateToken(token);
        if (goodToken) {
            navigate("/admin")
        }
    }
    const checkSubmission = (e) => {
        handleOnSubmitCredentials(e)
        setTimeout(() => {
            goToAdmin();
        }, 2500);
    }



    return (
        <form className="loginForm"
            onSubmit={checkSubmission}
        >
            <fieldset>
                <div className="loginForm__img">
                    <img src={LoginImageForm} alt="login image" />
                </div>
                <div className="loginForm__input">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Your username..."
                        name="username"
                        defaultValue={credentials.username}
                        onChange={handleOnChangeCredentials}
                    />
                </div>
                <div className="loginForm__input">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Your password..."
                        name="password"
                        defaultValue={credentials.password}
                        onChange={handleOnChangeCredentials}
                    />
                </div>
                <div className="loginForm__submit">
                    <input type="submit" value={"Login"} />
                </div>
            </fieldset>
        </form>
    )
}

export default LoginForm