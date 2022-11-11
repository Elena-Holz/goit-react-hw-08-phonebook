import initialState from './initialState';
// import useForm from 'servies/useForm'
import css from 'components/RegisterForm/RegisterForm.module.css';
import { useState } from 'react';


const RegisterForm = ({onSubmit}) => {
        const [state, setState] = useState({...initialState});
        const { name, email, password } = state;
      
    
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


  const handleChange = ({target}) => {
        const {value, name } = target;
        const newValue = value;
        setState(prevState => ({
            ...prevState,
            [name]: newValue,
        }))
    }    
    
// const handleChange  = ({target: {name, value}}) => {
    //     switch (name) {
    //         case 'name':
    //             console.log(value);
    //             return setName(value);
    //         case 'email':
    //             return setEmail(value);
    //          case 'password':
    //             return setPassword(value);
            
    //         default:
    //             return;
    //     }
    // }

     const handleSubmit = (e) => {
        e.preventDefault();
         onSubmit({ ...state });
         setState({ ...initialState });
    };
    
//  const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({...state});
//         // setState({ ...initialState });
//         setName(({name}) => name = '');
//         setEmail(({email}) => email = '');
//          setPassword(({password}) => password = '');
//     };

    return (
        // <form  className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.searchForm}>
            <form className={css.formGroup} onSubmit={handleSubmit}>
                <label className={css.labelText}>Name</label>
                <input className={css.field} value={name} type="text" name='name' onChange={handleChange} placeholder="Enter name"/>
                <label className={css.labelText}>Email</label>
                <input className={css.field} value={email} type="email" name='email'  onChange={handleChange} placeholder="Enter email"/>            
                <label className={css.labelText}>Password</label>
                <input className={css.field} value={password} type="text" name='password'  onChange={handleChange} placeholder="Enter password" />
                 <button className={css.registerbtn}>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;