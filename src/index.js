import React from 'react'
import ReactDom from 'react-dom/client';
import App from './Components/App'
import './Index.css'
import './style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
    <App/> 
    <ToastContainer/>
    </> 
)