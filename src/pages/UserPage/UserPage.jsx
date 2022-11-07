import React from "react";
import { ContactsList } from "components/ContactsList/ContactsList";
import UserMenu from "components/UserMenu/UserMenu.jsx";

export default function ContactsPage() {
    return (
        <div>
            <h1>Contacts page</h1>
            <UserMenu />
            <ContactsList />
        </div>
    )
}