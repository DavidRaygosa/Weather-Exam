export const IN_SHOW = 'IN_SHOW';
export const IN_HIDE = 'IN_HIDE';

export const showPlanetAction = () => (dispatch) => {
    dispatch({
        type: IN_SHOW,
        active: true
    });
};

export const hidePlanetAction = () => (dispatch) => {
    dispatch({
        type: IN_HIDE,
        active: false
    });
};