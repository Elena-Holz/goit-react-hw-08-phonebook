import { Link } from 'react-router-dom';

import {NavMenu} from "components/NavMenu/NavMenu.jsx"
import css from "components/Navbar/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={css.navbar}>
            <div className="container">
                <div className={css.row}>
                    <Link to="/">Logo</Link>
                    <NavMenu />
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
