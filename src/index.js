import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './components/layout/MainLayout'
import MainPage from './pages/MainPage'

import './css/style.css';



const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={MainPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'));

