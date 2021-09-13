import React, { useEffect } from 'react'
import { SyncLoader } from 'react-spinners';
// STYLES
import '../../../assets/styles/weatherComponent/statsComponent/statsComponent.scss';
// MOMENTJS
import moment from 'moment';
import 'moment/locale/es-mx';
// REDUX
import { connect } from 'react-redux';
    // ACTIONS
    import { getStats } from '../../../redux/actions/statsAction';

// IMAGES
import Sunrise_IMG from '../../../assets/images/sunrise.png';
import Sunset_IMG from '../../../assets/images/sunset.png';

const StatsComponent = ({countryState,statsState,regionState,statsDispatch}) => {

    const override = 'white';

    useEffect(()=>{
        moment.locale('es-mx')
        if(countryState.data.children[0].location_type !== 'City'){
            statsDispatch(countryState.data.children[0].woeid).then(res=>{
                statsDispatch(res.data[0].children[0].woeid)
            });
        }
        else statsDispatch(countryState.data.children[0].woeid);
    },[]);

    return (
        <section className="Stats">
            {statsState.inProgress ? <SyncLoader color={override}/> : (<div>
                {statsState.stats.children ? 
                <> {/* IF STATS IS REGIO */}
                </> : 
                <> {/* IF STATS IS A CITY */}
                <section className="time_weather">
                    {statsState.stats.consolidated_weather.map(weather=>(
                        <div className="card_time" key={weather.id}>
                            <div className="img_container">
                                <img alt={weather.weather_state_name} src={require('../../../assets/images/weatherstates/'+weather.weather_state_abbr+'.png').default}/>
                            </div>
                            <h3>{moment(weather.applicable_date).format("dddd")===moment().format("dddd") ? <>Ahora</> : moment(weather.applicable_date).format("dddd")}</h3>
                            <h2>{moment(weather.applicable_date).format("dddd")===moment().format("dddd") ? <>{Math.ceil(weather.the_temp)}°</> : <>{Math.ceil(weather.the_temp)}°</>}</h2>
                            <hr/>
                            <div className="max_min_container">
                                <span>Max: {Math.ceil(weather.max_temp)}°</span>
                                <span>Min: {Math.ceil(weather.min_temp)}°</span>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="time-footer">
                    <div className="sun-time">
                        <div className="img_cointainer">
                            <img alt="Sunrise" src={Sunrise_IMG}/>
                            <span>{moment(statsState.stats.sun_rise).format("HH:mm")}</span>
                        </div>
                        <div className="img_cointainer">
                            <img alt="Sunset" src={Sunset_IMG}/>
                            <span>{moment(statsState.stats.sun_set).format("HH:mm")}</span>
                        </div>
                    </div>
                    <div className="currentTime">
                        <span>{moment(statsState.stats.time).format("DD/MM/YYYY HH:mm:ss")}</span>
                    </div>
                </section>
            </>}
            </div>)}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        countryState: state.weatherReducer,
        regionState : state.regionReducer,
        statsState: state.statsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        statsDispatch: (woeid) => dispatch(getStats(woeid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsComponent);