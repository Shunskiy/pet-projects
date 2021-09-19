import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home/Home'
import {BrowserRouter} from "react-router-dom";
import {store} from './store/store'
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div className="app__wrapper">
                <Home/>
            </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
