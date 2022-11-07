import { NavLink } from "react-router-dom";
import css from 'components/Navigation/UserNav/UserNav.module.css';


const getClassActive = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

export function UserNav() {
   return (
    <nav className={css.navmenu}>
           <div className={css.container}>
               <div className={css.row}>
                    <NavLink className={getClassActive} to="/contacts">Contacts</NavLink>
                    <NavLink className={getClassActive} to="/contacts" >Logout</NavLink>
                </div>
           </div>
    </nav>
   )
}