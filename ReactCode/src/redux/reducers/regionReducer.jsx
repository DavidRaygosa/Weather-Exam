import { IN_PROGRESS_REGION, IN_SUCCESSFUL_REGION } from "../actions/regionAction";

const initialState = {
    data: [],
    inProgress: true,
    error: null
}

function regionReducer(state=initialState,action){

    switch(action.type){
        case IN_PROGRESS_REGION:
            return{
                ...state,
                inProgress: true
            }
        case IN_SUCCESSFUL_REGION:
            return{
                ...state,
                inProgress: false,
                data: action.payload.response.data[0]
            }
        default:
            return{
                ...state
            }
    }
}

export default regionReducer;