import { IN_PROGRESS, IN_SUCCESSFUL, IN_ERROR } from "../actions/continentAction";

const initialState = {
    continents: [],
    inProgress: true,
    error: null
}

function continent(state=initialState,action){

    switch(action.type){
        case IN_PROGRESS:
            return{
                ...state,
                inProgress: true
            }
        case IN_SUCCESSFUL:
            return{
                ...state,
                inProgress: false,
                continents: action.payload.response.data
            }
        case IN_ERROR:
            return{
                ...state,
                inProgress: false,
                continents: action.payload.error
            }
        default:
            return{
                ...state
            }
    }
}

export default continent;