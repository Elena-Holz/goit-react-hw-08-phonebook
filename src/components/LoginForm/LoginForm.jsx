import initialState from './initialState';
import css from 'components/LoginForm/LoginForm.module.css';
import { useState } from "react";


const LoginForm = ({onSubmit}) => {
        const [state, setState] = useState({...initialState});
        const { email, password } = state;
      
const handleChange = ({target}) => {
        const {value, name } = target;
        const newValue = value;
        setState(prevState => ({
            ...prevState,
            [name]: newValue,
        }))
    }    

     const handleSubmit = (e) => {
        e.preventDefault();
         onSubmit({ ...state });
         setState({ ...initialState });
        
    };


    return (
        <div className={css.searchForm}>
            <form className={css.formGroup} onSubmit={handleSubmit}>
                <label className={css.labelText}>Email</label>
                <input className={css.field} name='email' type="email" value={email} onChange={handleChange} placeholder="Enter email"/>            
                <label className={css.labelText}>Password</label>
                <input className={css.field} name='password' type="text" value={password} onChange={handleChange} placeholder="Enter password" />
                 <button className={css.searchbtn}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;