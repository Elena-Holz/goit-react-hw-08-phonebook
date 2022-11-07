import React from "react";
import css from 'components/RegisterForm/RegisterForm.module.css';

const UserMenu = () => {
    return (
        <div>
            <p>mango@mail.com</p>
            <button className={css.registerbtn}>Logout</button>
        </div>
    )
};

export default UserMenu;
