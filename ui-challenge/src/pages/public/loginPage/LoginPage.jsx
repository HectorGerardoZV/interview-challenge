

//Components
import LoginForm from "../../../components/loginForm/LoginForm"

//Images
import LoginImage from "../../../img/img-login.svg"

import "./LoginPage.css"
const LoginPage = () => {
    return (
        <div className="loginPage">
            <div className="loginPage__left">
                <h1>Taking care of yourself is part of being happy...</h1>
                <div className="loginPage__image">
                    <img src={LoginImage} alt="Login image" />
                </div>
            </div>
            <div className="loginPage_right">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage