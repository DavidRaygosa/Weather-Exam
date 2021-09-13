import { IN_PROGRESS_WEATHER, IN_SUCCESSFUL_WEATHER, IN_ERROR_WEATHER } from "../actions/weatherAction";

const initialState = {
    data: [],
    inProgress: true,
    error: null
}

function weatherReducer(state=initialState,action){

    switch(action.type){
        case IN_PROGRESS_WEATHER:
            return{
                ...state,
                inProgress: true
            }
        case IN_SUCCESSFUL_WEATHER:
            return{
                ...state,
                inProgress: false,
                data: action.payload.response.data[0]
            }
        case IN_ERROR_WEATHER:
            return{
                ...state,
                inProgress: false,
                data: action.payload.error
            }
        default:
            return{
                ...state
            }
    }
}

export default weatherReducer;