import { IN_CHANGE, IN_CURRENT } from "../actions/menuAction"

const initialState = {
    woeid: 23424900
}

function menuReducer(state=initialState,action){

    switch(action.type){
        case IN_CHANGE:
            return{
                ...state,
                woeid: action.woeid
            }
        case IN_CURRENT:
            return{
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default menuReducer;