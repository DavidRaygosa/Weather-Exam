import React, { useEffect } from 'react';
// ROUTER
import { Link } from "react-router-dom";
// REDUX
import { connect } from 'react-redux';
    // ACTIONS
    import { hidePlanetAction, showPlanetAction } from '../../redux/actions/planetAction';
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
// STYLES
import '../../assets/styles/headerComponent/header.scss';

const Header = ({goToPrincipal, planetHideDispatch, planetShowDispatch}) => {

    useEffect(()=>{
        planetShowDispatch();
    },[]);

    const launchApp = () => {
        goToPrincipal(true);
        planetHideDispatch();
    }

    return(
        <header>
            <h1 className="title">Climax World</h1>
            <p className="subtitle">Consulte el clima de los lugares más populares del mundo.</p>
            <Link to="/weather" ><button onClick={() => launchApp()}><div className="button-text">EMPEZAR AHORA</div> <FontAwesomeIcon icon={faChevronRight} /></button></Link>
        </header>
    )
};

const Dispatch = dispatch => ({
    // GO TO PRINCIPAL MENU
    goToPrincipal(isMenu){
        dispatch({
            type: "OPEN_PRINCIPAL_TEMPLATE",
            isMenu
        });
    },
    planetHideDispatch: () => dispatch(hidePlanetAction()),
    planetShowDispatch: () => dispatch(showPlanetAction())
})

export default connect(null, Dispatch)(Header);