import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/fonts/Inter Font Family/style.css"
import "./styles/index.js"
import './App.css';

import {Provider} from "react-redux";
import {store} from './_state/store'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { UserProvider } from './components/userState/UserState';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   //  <React.StrictMode> 
    <Provider store={store}>
      <Router>  
          <UserProvider>
            <App />
          </UserProvider>
      </Router>
    </Provider>
    
   // </React.StrictMode>   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
