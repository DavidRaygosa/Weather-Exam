import { IN_PROGRESS_STATS, IN_SUCCESSFUL_STATS, IN_ERROR_STATS } from "../actions/statsAction";

const initialState = {
    stats: [],
    inProgress: true,
    error: null
}

function statsReducer(state=initialState,action){

    switch(action.type){
        case IN_PROGRESS_STATS:
            return{
                ...state,
                inProgress: true
            }
        case IN_SUCCESSFUL_STATS:
            return{
                ...state,
                inProgress: false,
                stats: action.payload.response.data[0]
            }
        case IN_ERROR_STATS:
            return{
                ...state,
                inProgress: false,
                stats: action.payload.error
            }
        default:
            return{
                ...state
            }
    }
}

export default statsReducer;