import React from "react";
import HomeGeneral from "./components/HomeGeneral";
import HomeFeat2 from "./components/HomeFeat2";
import HomeFeat3 from "./components/HomeFeat3";
import HomeFeat4 from "./components/HomeFeat4";
import HomeFeat5 from "./components/HomeFeat5";
import HomeFeat6 from "./components/HomeFeat6";
import Cat from "./components/Cat";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css";
//import "./css/amp-style.css";
//import "./css/editor-style.css";
//import "./css/iecss.css";
//import "./css/reset.css";
//import "./css/rtl.css";
import "./css/media-queries.css";
//import "./css/amp-media-queries.css";
//import "./css/media-queries-rtl.css";


function App() {
  return (
    <div className="App">
      <Header />
      <HomeGeneral />
      <HomeFeat2 />
      <HomeFeat3 />
      <HomeFeat4 />
      <HomeFeat5 />
      <HomeFeat6 />
      <Cat />
      <Footer />
    </div>
  );
}

export default App;
