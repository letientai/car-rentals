import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './assets/css/globalStyles';
import { Provider } from 'react-redux';
import {store} from './redux';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Router>
        <GlobalStyles/>
        <App />
      </Router>
    </Provider>
);
