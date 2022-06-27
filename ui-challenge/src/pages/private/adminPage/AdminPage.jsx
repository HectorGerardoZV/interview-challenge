import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"


//Hooks
import useAuth from "../../../hooks/useAuth"

//Components
import SiderBar from "../../../components/sideBar/SiderBar"

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
            <Outlet/>
        </section>
    )
}

export default AdminPage