import HttpClient from '../../services/HttpClient';

export const IN_PROGRESS_STATS = 'IN_PROGRESS_STATS';
export const IN_SUCCESSFUL_STATS = 'IN_SUCCESSFUL_STATS';
export const IN_ERROR_STATS = 'IN_ERROR_STATS';

export const getStats = (woeid) => (dispatch) => {
    dispatch({type:IN_PROGRESS_STATS});

    return new Promise((resolve, eject)=>{
        HttpClient.get('/location/'+woeid).then(response =>{
            dispatch({
                type: IN_SUCCESSFUL_STATS,
                payload:{
                    response
                }
            });
            resolve(response);
        });
    });
};

export const loading = () => (dispatch) => {
    dispatch({type:IN_PROGRESS_STATS});
}