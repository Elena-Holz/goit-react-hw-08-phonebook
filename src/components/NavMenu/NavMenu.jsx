import { NavLink } from "react-router-dom";
import css from 'components/NavMenu/NavMenu.module.css';


const getClassActive = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

export function NavMenu() {
   return (
    <nav className={css.navmenu}>
           <div className={css.container}>
               <div className={css.row}>
                    <NavLink className={getClassActive} to="/register">Register</NavLink>
                    <NavLink className={getClassActive} to="/login" >Login</NavLink>
                    <NavLink className={getClassActive} to="/contacts">Contacts</NavLink>
                    <NavLink className={getClassActive} to="/login" >Logout</NavLink>
                </div>
           </div>
    </nav>
   )
}