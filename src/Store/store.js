import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {swapiReducer} from './reducers/reducersSwapi';
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    swapi: swapiReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
