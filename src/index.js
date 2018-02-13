import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import HttpsRedirect from 'react-https-redirect';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {createEpicMiddleware} from 'redux-observable';


import APP from './components/App';
import HEADER from './components/Common/Header'
import RESOURCES from './components/Resources/Resources';
import requireAuth from './components/Common/require_authentication';
import SETTING from './components/Setting/Setting';
import reducers from './reducers';


import rootEpic from './epics';
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,middleware,epicMiddleware)
  )
)


ReactDOM.render(
  <Provider store={store}>
     <HttpsRedirect>
    <ConnectedRouter history={history}>
      <div>
        <HEADER/>
        <Switch>
          <Route path='/setting' component={requireAuth(SETTING)}/>
          <Route path='/resources' component={requireAuth(RESOURCES)}/>
          <Route path='/' component={APP}/>
        </Switch>
      </div>
    </ConnectedRouter>
     </HttpsRedirect>
  </Provider>
  , document.getElementById('root'));
