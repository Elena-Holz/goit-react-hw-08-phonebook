import React from "react";
import { ContactsList } from "components/ContactsList/ContactsList";
import { getIsLogin } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function ContactsPage() {

    const isLogin = useSelector(getIsLogin);
    console.log(getIsLogin);

      if (!isLogin) {
        return <Navigate to="/login" />
    } 

    return (
        <div>
            <ContactsList />
        </div>
    )
}