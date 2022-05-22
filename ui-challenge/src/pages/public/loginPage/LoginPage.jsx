


//Components
import LoginForm from "../../../components/loginForm/LoginForm"

//Images
import LoginImage from "../../../img/img-login.svg"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}

export default LoginPage