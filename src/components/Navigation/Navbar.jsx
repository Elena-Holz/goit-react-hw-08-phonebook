import { Link } from 'react-router-dom';
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { UserNav } from "components/Navigation/UserNav/UserNav.jsx"
import { AuthNav } from "components/Navigation/AuthNav/AuthNav.jsx"
import css from "components/Navigation/Navbar.module.css";

const Navbar = () => {
    const isLogin = useSelector(getIsLogin);
    console.log(isLogin);
    return (
        <nav className={css.navbar}>
            <div className="container">
                <div className={css.row}>
                    <Link to="/">Main</Link>
                    {isLogin ? <UserNav /> : <AuthNav />}
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
