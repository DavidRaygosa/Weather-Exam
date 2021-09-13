import { IN_SHOW, IN_HIDE } from "../actions/planetAction"

const initialState = {
    active: true
}

function planetReducer(state=initialState,action){

    switch(action.type){
        case IN_SHOW:
            return{
                ...state,
                active: true
            }
        case IN_HIDE:
            return{
                ...state,
                active: false
            }
        default:
            return{
                ...state
            }
    }
}

export default planetReducer;