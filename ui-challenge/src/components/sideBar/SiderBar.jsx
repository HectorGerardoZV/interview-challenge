import { Link, useNavigate } from "react-router-dom"

//Hooks
import useAuth from "../../hooks/useAuth"

//Images
import LogOut from "../../img/btn-logout.svg"
import "./SideBar.css"
const SiderBar = () => {
    let navigate = useNavigate();
    const { user, resetAuth } = useAuth()

    const handleOnClickLogOut = () => {
        resetAuth();
        navigate("/login")
    }

    return (
        <section className="sideBar">
            <div className="sideBar__head">
                <h1>Welcome</h1>
                <h3>{user?.username}</h3>
            </div>
            <div className="sideBar__menu">
                <Link to={"/admin"}>Home</Link>
                <Link to={"/admin"}>-Option</Link>
                <Link to={"/admin"}>-Option</Link>
                <Link to={"/admin"}>-Option</Link>
                <Link to={"/admin"}>-Option</Link>
                <Link to={"/admin"}>-Option</Link>
            </div>

            <div className="sideBar__logout">
                <button onClick={handleOnClickLogOut}>
                    <img src={LogOut} alt="log out" />
                </button>
            </div>

        </section>
    )
}

export default SiderBar