import { useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"


import "./AdminPage.css"
const AdminPage = () => {
    let navigate = useNavigate();
    const { token ,queryValidateToken} = useAuth();

    const checkAccess = async () => {
        const ok = await queryValidateToken(token);
        if(!ok){
            navigate("/login")
        }
    }

    useEffect(()=>{
        checkAccess()
    },[])

    return (
        <div>AdminPage</div>
    )
}

export default AdminPage