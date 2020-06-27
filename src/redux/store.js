import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {composedWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composedWithDevTools(applyMiddleware(thunk)));