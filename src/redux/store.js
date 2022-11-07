import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'redux/auth/auth-slice'
import contactsSlice from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsSlice,
        filter: filterReducer,
    }
})

export default store;
