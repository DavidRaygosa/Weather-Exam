import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// REDUX
import { Provider } from "react-redux";
// STYLES
import './App.scss';
// import Components
import Planet from './components/planetBGComponente/planetComponent';
import Header from './components/headerComponent/header';
import Dashboard from './components/dashboardComponent/dashboard';
// STORE
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        {/* PLANET VIDEO CONTAINER */}
        <Planet/>
        
        {/* APP CONTAINER */}
        <section className="App">
          <Router>
            <Route exact path="/" component={Header}>
            </Route>
            <Route path="/weather" component={Dashboard}>
            </Route>
          </Router>
        </section>
      </React.Fragment>
    </Provider>
  );
}

export default App;