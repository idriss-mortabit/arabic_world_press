import React from "react";
import HomeGeneral from "./components/HomeGeneral";
import HomeFeat2 from "./components/HomeFeat2";
import HomeFeat5 from "./components/HomeFeat5";
import HomeFeat3 from "./components/HomeFeat3";
import HomeFeat4 from "./components/HomeFeat4";
import HomeFeat6 from "./components/HomeFeat6";
import Cat from "./components/Cat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import "./style.css";
//import "./css/amp-style.css";
//import "./css/editor-style.css";
//import "./css/iecss.css";
//import "./css/reset.css";
//import "./css/rtl.css";
import "./css/media-queries.css";
//import "./css/amp-media-queries.css";
//import "./css/media-queries-rtl.css";

function Home() {
  return (
    <div className="App">
      <HomeGeneral />
      <HomeFeat2 />
      <HomeFeat3 />
      <HomeFeat4 />
      <HomeFeat5 />
      <br/>
      <HomeFeat6 />
    </div>
  );
}

function App() {
  return (
  <Router>
    <ScrollToTop />
    <React.Fragment>
    <Header/>
      <Switch>
        <Route exact path={"/"} component = {Home} />
        <Route path = {"/news/:category"} component = {Cat} />
        <Route path = {"/terms"} component = {Terms} />
        <Route path = {"/privacy"} component = {Privacy} />
      </Switch>
    <Footer/>
    </React.Fragment>
  </Router>
  );
}

export default App;
