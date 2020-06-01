const redux = require('redux');

const createStore = redux.createStore;

//set up the initial state object
const initialState = {
    counter : 0
}

//reducer
const reducerFunction = (state = initialState,action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            counter : state.counter + action.value
        }
    }
    return state;
}

//store
const store = createStore(reducerFunction);
console.log(store.getState());

//subscriptions
store.subscribe(() => {
    console.log('[subscription is called]', store.getState())
})

//actions
store.dispatch({type : 'INC_COUNTER'});
store.dispatch({type : 'ADD_COUNTER', value : 10});
console.log(store.getState());
