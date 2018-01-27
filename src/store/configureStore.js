import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import calendarReducer from '../reducers/calendar';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            calendar: calendarReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};




