import React, { useState, createRef } from 'react'
// REDUX
import { connect } from 'react-redux';
    // ACTIONS
    import { change } from '../../redux/actions/menuAction';
// STYLES
import '../../assets/styles/menuComponent/menu.scss';
// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Menu = ({continentState, menuDispatch}) => {
    
    const refDiv = createRef();
    const[currentWeoid,setCurrentWeoid]=useState(23424900);
    const[appearFloatBtn,setAppearFloatBtn]=useState(false);

    const defaultLi = (currentWeoidFromArray) => {
        if(currentWeoidFromArray===currentWeoid){
            setTimeout(() => {
                let defaultLi = document.getElementById(currentWeoid);
                defaultLi.classList.add("active");
            },1);
        }
    };

    const changeActive = (expectedChange) => { 
        let removeClassLi= document.getElementById(currentWeoid);
        let addClassLi = document.getElementById(expectedChange);
        removeClassLi.classList.remove("active");
        addClassLi.classList.add("active");
        setCurrentWeoid(expectedChange); 
    };

    const closeBarMenu = () => {
        let menu = document.getElementById("menu");
        menu.classList.add("closeNavBar")
        setTimeout(() => {
            menu.classList.remove("closeNavBar");
            menu.classList.add("closedBar");
            menu.classList.remove("openedBar");
        }, 300);
    }
    
    const openBarMenu = () => {
        let menu = document.getElementById("menu");
        menu.classList.remove("closedBar");
        menu.classList.add("openNavBar")
        menu.classList.add("openedBar");
        setTimeout(() => {
            menu.classList.remove("openNavBar")
        }, 300);
    }

    const scrollToTop = () => {
        refDiv.current.scrollTo(0, 0);
    }

    const refScroll = (e) => {
        if(e.target.scrollTop>=200) setAppearFloatBtn(true);
        else setAppearFloatBtn(false);
    }

    return(
        <>
        <div className="barMenu" onClick={()=> openBarMenu()}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <section id="menu" className="menu">
            <div className="closeBar"><FontAwesomeIcon icon={faTimes} onClick={()=> closeBarMenu()}/></div>
            <h2 className="title">Menu</h2>
            <ul className="continent-container" ref={refDiv} onScroll={(e) => refScroll(e)}>
            {continentState.continents.map(continent => (
                    <li className="continent" key={continent.woeid}>
                        <h3>{continent.title}</h3>
                        <ul className="country-container">
                            {continent.children.map(country =>(
                                    <li className="country" key={country.woeid} id={country.woeid} onClick={() => {menuDispatch(country.woeid);changeActive(country.woeid)}}>
                                        {defaultLi(country.woeid)}
                                        <h4>{country.title}</h4>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
            </ul>
            {appearFloatBtn ? 
            <div className="to-Top"><FontAwesomeIcon icon={faChevronUp} onClick={()=> scrollToTop()}/></div> :
            <></>}
            
        </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        continentState: state.continent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuDispatch: (woeid) => dispatch(change(woeid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);