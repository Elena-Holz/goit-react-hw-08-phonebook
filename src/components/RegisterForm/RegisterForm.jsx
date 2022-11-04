import React from "react";
// import css from 'components/RegisterForm/RegisterForm.module.css';
import css from 'components/FormAddPhone/FormAddPhone.module.css'

const RegisterForm = () => {
 

    return (
        <>
            <form className={css.searchForm}>
                <label>User name</label>
                <input className={css.field} type="text"  placeholder="Enter user name"/>
                <label>User email</label>
                <input className={css.field} type="text"  placeholder="Enter user email"/>            
                <label >User password</label>
                <input className={css.field} type="text" placeholder="Enter user password" />
                 <button className={css.searchbtn}>Register</button>
            </form>
        </>
    )
}

export default RegisterForm;