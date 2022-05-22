import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

//Hooks
import useAuth from "../../../hooks/useAuth"

//Components
import SiderBar from "../../../components/sideBar/SiderBar"
import AdminPanel from "../../../components/adminPanel/AdminPanel"

import "./AdminPage.css"
const AdminPage = () => {
    let navigate = useNavigate();
    const { token, queryValidateToken } = useAuth();

    const checkAccess = async () => {
        const ok = await queryValidateToken(token);
        if (!ok) {
            navigate("/login")
        }
    }

    useEffect(() => {
        checkAccess()
    }, [])

    return (
        <section className="adminPage">
            <SiderBar />
            <AdminPanel />
        </section>
    )
}

export default AdminPage