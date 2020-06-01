import * as actionTypes from '../actions';

const initialState = {
    counter : 0
}

const counter = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.INCREMENT :
            return{
                ...state,
                counter : state.counter + 1
            }
        case actionTypes.DECREMENT :
            return{
                ...state,
                counter : state.counter - 1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter : state.counter + action.value
            }
        case actionTypes.SUB:
            return{
                ...state,
                counter : state.counter - action.value
            }
    }
    return state; 
}

export default counter;