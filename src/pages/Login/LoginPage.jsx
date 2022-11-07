
import LoginForm from 'components/LoginForm/LoginForm.jsx';
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { getIsLogin } from "redux/auth/auth-selectors";
import { login } from "redux/auth/auth-operations";


export default function LoginPage() {
    const dispatch = useDispatch();
    // const isUserLogin = useSelector(getIsLogin);
    // console.log(isUserLogin);

     const onLogin = (data) => {
    dispatch(login(data));
  }

//   if (isUserLogin) {
//     return <Navigate to="/contacts" />
//   }
    
    return (
        <div>
            <LoginForm onSubmit={onLogin}/>
        </div>
    )
}
