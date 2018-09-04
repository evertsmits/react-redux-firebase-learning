import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App.jsx'
import registerServiceWorker from './registerServiceWorker'
// redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// used to connect react with the redux framework
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Header from './routes/Header.jsx'
import LoadingComponent from './components/LoadingComponent'
import AuthenticatedComponent from './components/AuthenticatedComponent'
import NoteDetail from './components/NoteDetail'
import NoteEdit from './components/NoteEdit'

// create redux store -> reducers -> actions - actionType | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// provide the store to react

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadingComponent>
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <AuthenticatedComponent>
              <Header />
              <Route exact path='/' component={App} />
              <Route exact path='/:id/edit' component={NoteEdit} />
              <Route exact path='/:id' component={NoteDetail} />
            </AuthenticatedComponent>
          </Switch>
        </div>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
