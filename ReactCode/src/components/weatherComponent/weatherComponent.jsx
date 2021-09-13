import React, { useState, useEffect, createRef } from 'react';
import { SyncLoader } from 'react-spinners';
// COMPONENTS
import StatsComponent from './statsComponent/StatsComponent';
// REDUX
import { connect } from 'react-redux';
    // ACTIONS
    import { getWeatherData } from '../../redux/actions/weatherAction';
    import { getRegionData } from '../../redux/actions/regionAction';
    import { getStats, loading } from '../../redux/actions/statsAction';
// STYLES
import '../../assets/styles/weatherComponent/weather.scss';
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// SPINNER STYLE
const override = 'white';

const Weather = ({menuState, countryState, regionState, weatherDispatch, regionDispatch, statsDispatch, setLoadingStats}) => {

    const[country,setCountry]=useState([]);
    const[active,setActive]=useState(0);
    const[active_city,SetActive_city]=useState(0);
    const refDiv = createRef();
    const[appearFloatBtn,setAppearFloatBtn]=useState(false);

    useEffect(()=>{
        // SET COUNTRY DATA TO REDUX STATE
        !countryState.data ? setCountry(countryState.data) : weatherDispatch(menuState.woeid).then(response=>{
            setCountry(response.data[0]);
            if(response.data[0].children[0].location_type !== 'City'){
                regionDispatch(response.data[0].children[0].woeid);
            }
        });
        SetActive_city(0);
        setActive(0);
    },[menuState.woeid]);

    const changeStats = (index, woeid) => {
        setLoadingStats();
        if(country.children[0].location_type !== 'City') regionDispatch(country.children[index].woeid).then(res=>{
            statsDispatch(res.data[0].children[0].woeid);
        });
        else statsDispatch(woeid);
        SetActive_city(0);
        setActive(index);
    }

    const changeRegion = (index, woeid) => {
        SetActive_city(index);
        statsDispatch(woeid);
    }

    const changeTitle = (title) => {
        document.title = title;
    }

    const scrollToTop = () => {
        refDiv.current.scrollTo(0, 0);
    }

    const refScroll = (e) => {
        if(e.target.scrollTop>=200) setAppearFloatBtn(true);
        else setAppearFloatBtn(false);
    }

    return(
        <section className="Weather" ref={refDiv} onScroll={(e) => refScroll(e)}>
            {countryState.inProgress ? <SyncLoader color={override}/> : (
                <>
                    <h1 className="title">{country.title}</h1>
                    {changeTitle(country.title)}
                    <hr/>
                    <div className="banner">
                        {country.length===0 ? <SyncLoader color={override}/> : (
                            country.children.map((zone,index)=>(
                                <li
                                    key={zone.woeid} 
                                    className={"card " + (active === index ? 'active' : '')} 
                                    onClick={() => changeStats(index, zone.woeid)}>
                                    <span className="zoneTitle">{zone.title}</span>
                                    <span>{zone.location_type}</span>
                                </li>
                            ))
                        )}
                    </div>
                    {countryState.data.children[0].location_type !== 'City' ? 
                    <> {/* IF COUNTRYSTATE CHILD ITS A REGION */}
                        <div className="cities">
                            {regionState.inProgress ? <SyncLoader color={override}/> :
                                regionState.data.children.map((city,index)=>(
                                    <li 
                                        key={city.woeid} 
                                        className={"cities-card " + (active_city === index ? 'active' : '')}
                                        onClick={() => changeRegion(index, city.woeid)}>
                                            <span>{city.title}</span>
                                    </li>
                                ))
                            }
                        </div>
                    </> : <>{/* THIS SPACE ONLY IF COUNTRYSTATE CHILD ITS NOT A REGION */}</>}
                    <div>
                        <StatsComponent/>
                    </div>
                </>
            )}
            {appearFloatBtn ? 
            <div className="to-Top"><FontAwesomeIcon icon={faChevronUp} onClick={()=> scrollToTop()}/></div> :
            <></>}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        menuState: state.menuReducer,
        regionState : state.regionReducer,
        countryState: state.weatherReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        weatherDispatch: (woeid) => dispatch(getWeatherData(woeid)),
        regionDispatch: (woeid) => dispatch(getRegionData(woeid)),
        statsDispatch: (woeid) => dispatch(getStats(woeid)),
        setLoadingStats: () => dispatch(loading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);