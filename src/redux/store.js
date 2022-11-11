import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'redux/auth/auth-slice'
import contactsSlice from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";


const contactsPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(contactsPersistConfig, authReducer);

 const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsSlice,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);
export default store;
