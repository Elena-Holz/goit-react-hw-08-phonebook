
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "components/RegisterForm/RegisterForm.jsx";
import { useDispatch } from "react-redux";
// import { isLogin } from "redux/auth/auth-selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

export default function RegisterPage() {
    const dispatch = useDispatch();
    // const isUserLogin = useSelector(isLogin);
    // console.log(isUserLogin);
    
    const onRegister = (data) => {
        dispatch(signup(data));
    }

    // if (isUserLogin) {
    //     return <Navigate to="/contacts"  />
    // }

    return (
        <div>
            <RegisterForm onSubmit={onRegister}/>
        </div>
    )
}

