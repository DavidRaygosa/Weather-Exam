import HttpClient from '../../services/HttpClient';

export const IN_PROGRESS_WEATHER = 'IN_PROGRESS_WEATHER';
export const IN_SUCCESSFUL_WEATHER = 'IN_SUCCESSFUL_WEATHER';
export const IN_ERROR_WEATHER = 'IN_ERROR_WEATHER';

export const getWeatherData = (woeid) => (dispatch) => {
    dispatch({type:IN_PROGRESS_WEATHER});

    return new Promise((resolve, eject)=>{
        HttpClient.get('/location/'+woeid).then(response =>{
            dispatch({
                type: IN_SUCCESSFUL_WEATHER,
                payload:{
                    response
                }
            });
            resolve(response);
        });
    });
};