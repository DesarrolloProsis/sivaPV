import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
//Redux con react-redux
import {Provider} from "react-redux";
import store from "./Redux/store";

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));

