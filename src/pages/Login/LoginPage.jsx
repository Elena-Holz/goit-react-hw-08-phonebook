
import LoginForm from 'components/LoginForm/LoginForm.jsx';
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";


export default function LoginPage() {
    const dispatch = useDispatch();
 

     const onLogin = (data) => {
    dispatch(login(data));
  }
    
    return (
        <div>
            <LoginForm onSubmit={onLogin}/>
        </div>
    )
}
