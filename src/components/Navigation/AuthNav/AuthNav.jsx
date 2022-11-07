import { NavLink } from "react-router-dom";
import css from 'components/Navigation/AuthNav/AuthNav.module.css';


const getClassActive = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

export function AuthNav() {
   return (
    <nav className={css.navmenu}>
           <div className={css.container}>
               <div className={css.row}>
                    <NavLink className={getClassActive} to="/register">Register</NavLink>
                    <NavLink className={getClassActive} to="/login" >Login</NavLink>
                </div>
           </div>
    </nav>
   )
}