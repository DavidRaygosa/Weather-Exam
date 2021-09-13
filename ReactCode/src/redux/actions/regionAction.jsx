import HttpClient from '../../services/HttpClient';

export const IN_PROGRESS_REGION = 'IN_PROGRESS_REGION';
export const IN_SUCCESSFUL_REGION = 'IN_SUCCESSFUL_REGION';

export const getRegionData = (woeid) => (dispatch) => {
    dispatch({type:IN_PROGRESS_REGION});

    return new Promise((resolve,eject) => {
        HttpClient.get('/location/'+woeid).then(response =>{
            dispatch({
                type: IN_SUCCESSFUL_REGION,
                payload:{
                    response
                }
            });
            resolve(response);
        });
    });
}