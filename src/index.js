import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { App } from 'components/App';
// import { PersistGate } from 'redux-persist/integration/react';
// import store, { persistor } from "redux/store";
import store from "redux/store";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    {/* <BrowserRouter> */}
      <BrowserRouter basename='/goit-react-hw-08-phonebook/'>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
          {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

