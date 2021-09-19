import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <div className={"app__wrapper"}>
            <Home/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
