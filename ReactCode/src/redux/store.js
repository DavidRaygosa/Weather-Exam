import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// STORE
    // ALMACENAMIENTO DEL ESTADO

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;