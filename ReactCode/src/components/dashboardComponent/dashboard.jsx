import React, { useEffect } from 'react';
// REDUX
import { connect } from 'react-redux';
    // ACTIONS
    import { getContinents } from '../../redux/actions/continentAction';
    import { hidePlanetAction } from '../../redux/actions/planetAction';
// STYLES
import '../../assets/styles/dashboardComponent/dashboard.scss';
// COMPONENTS
import Menu from '../menuComponent/menu';
import Weather from '../weatherComponent/weatherComponent';

const Dashboard = ({continentState, continentsDispatch, planetDispatch}) => {

    useEffect(()=>{
        if(continentState.continents.length===0) continentsDispatch().then();
        planetDispatch();
    },[]);

    return(
        <section className="dashboard">
            <Menu/>
            <Weather/>
        </section> 
    )
}

const mapStateToProps = (state) => {
    return {
        continentState: state.continent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        continentsDispatch: () => dispatch(getContinents()),
        planetDispatch: () => dispatch(hidePlanetAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);