import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/container/app/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './container/main/main'
import { Provider } from 'react-redux'
import {store} from "./store/index";
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Main />
        </Provider>
    </MuiThemeProvider>

    , document.getElementById('root'));
registerServiceWorker();
