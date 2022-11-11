import { NavLink } from "react-router-dom";
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import UserMenu from "components/UserMenu/UserMenu.jsx";
import { AuthNav } from "components/Navigation/AuthNav/AuthNav.jsx";
import css from "components/Navigation/Navbar.module.css";

const getClassActive = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

const Navbar = () => {
    const isLogin = useSelector(getIsLogin);
    console.log(isLogin);
    return (
        <nav className={css.navbar}>
            <div className="container">
                <div className={css.row}>
                    <NavLink className={getClassActive} to="/">Main</ NavLink>
                    {isLogin && <NavLink className={getClassActive} to="/contacts">Contacts</NavLink>}
                    {isLogin ? <UserMenu /> : <AuthNav />}
                </div>
            </div>
        </nav>
    )
}


export default Navbar;