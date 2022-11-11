import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";

// import { Navigate } from "react-router-dom";
// import { getIsLogin } from "redux/auth/auth-selectors";

import css from 'components/RegisterForm/RegisterForm.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
 
// const isUserLogin = () => {
//     return <Navigate to="/contacts" />
//   }

    
    const onLogout = () => {
    dispatch(logout());
  }
    return (
        <div>
            <h3 className={css.textEmail}>{`Welcome back, ${name}`}</h3>
            <button onClick={onLogout} className={css.registerbtn}>Logout</button>
        </div>
    )
};


