import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
}                           from "redux";
import thunk                from "redux-thunk";


const rootReducer = combineReducers({

    app: combineReducers({

    })
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
