import { createContext, useState } from "react"
import axiosClient from "../config/axiosClient"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem("token") ?
            JSON.parse(localStorage.getItem("token")) :
            null
    )
    const [user, setUser] = useState(
        localStorage.getItem("user") ?
            JSON.parse(localStorage.getItem("user")) :
            null
    )
    const [credentials, setCredentials] = useState(
        localStorage.getItem("credentials") ?
            JSON.parse(localStorage.getItem("credentials")) :
            { username: "", password: "" }
    )
    const queryApiAuth = async () => {
        try {
            const response = await axiosClient.post("/auth", credentials);
            const { data } = response;
            setToken(data.token);
            setUser({
                username: credentials.username
            })
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify({
                username: credentials.username
            }))
            showToast("Great!!!", "good")
        } catch (error) {
            const { data } = error.response
            showToast(data.msg, "bad")
        }
    }
    const queryValidateToken = async(tokenAccess)=>{
        if(tokenAccess){
            try {
                const config = {
                    headers:{
                        authorization: `Bearer ${tokenAccess}`
                    }
                }
                const response = await axiosClient.get("/auth", config)
                const {data} = response;
                console.log(data);
                return true;
            } catch (error) {
                console.log(error.response.data);
            }
        }
        return false;
    }
    const handleOnChangeCredentials = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmitCredentials = async (e) => {
        e.preventDefault();
        await queryApiAuth()
    }
    const showToast = (msg, type) => {
        toast.success(`${msg}`, {
            className: `${type === "bad" ? "toast-custom-bad" : "toast-custom"}`,
            progressClassName: "toast-progress",
            closeButton: false,
            icon: false
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                credentials,
                queryApiAuth,
                queryValidateToken,
                handleOnChangeCredentials,
                handleOnSubmitCredentials
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext