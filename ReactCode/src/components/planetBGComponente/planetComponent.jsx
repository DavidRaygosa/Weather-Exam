import React from 'react';
// STYLEs
import '../../assets/styles/planetBGComponent/planet.scss';
// REDUX
import { connect } from 'react-redux';

const Planet = ({isActive}) => {
    return(
        <>
        {isActive.active ? <>
            <div id="planet-id" className="planet">
            </div> 
        </> : 
            <div id="planet-id" className={`planet planet_animation ${!isActive.active ? "ZoomIn" : ""}`}>
            </div>
        }
        </>
    )
}

const State = state => ({
    isActive: state.planetReducer
});

export default connect(State, null)(Planet);