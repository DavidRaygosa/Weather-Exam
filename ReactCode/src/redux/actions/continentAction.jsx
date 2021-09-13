import HttpClient from '../../services/HttpClient';

export const IN_PROGRESS = 'IN_PROGRESS';
export const IN_SUCCESSFUL = 'IN_SUCCESSFUL';
export const IN_ERROR = 'IN_ERROR';



export const getContinents = () => (dispatch) => {
    dispatch({type:IN_PROGRESS});

    return new Promise((resolve, eject)=>{
        HttpClient.get('/location/all').then(response =>{
            dispatch({
                type: IN_SUCCESSFUL,
                payload:{
                    response
                }
            });
            resolve(response);
        });
    });

    /*
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users=>{
            dispatch({
                type: PETICION_EXITOSA,
                payload:{
                    users
                }
            });
        })
        .catch(error=>{
            dispatch({
                type:PETICION_ERRONEA,
                error: error.toString()
            });
        });
    */
};