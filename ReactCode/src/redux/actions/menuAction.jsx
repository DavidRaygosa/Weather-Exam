export const IN_CHANGE = 'IN_CHANGE';
export const IN_CURRENT = 'IN_CURRENT';

export const change = (woeid) => (dispatch) => {
    dispatch({
        type: IN_CHANGE,
        woeid: woeid
    });
};

export const current = () => (dispatch) => {
    dispatch({
        type: IN_CURRENT
    });
};