
import { signup } from "redux/auth/auth-operations";
import RegisterForm from "components/RegisterForm/RegisterForm.jsx";
import { useDispatch } from "react-redux";


export default function RegisterPage() {
    const dispatch = useDispatch();

    
    const onRegister = (data) => {
        dispatch(signup(data));
    }

    return (
        <div>
            <RegisterForm onSubmit={onRegister}/>
        </div>
    )
}

