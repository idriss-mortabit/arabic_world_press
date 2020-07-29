import React from "react";
import HomeGeneral from "./components/HomeGeneral";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DownMenu from "./components/DownMenu";
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
      <Footer />
    </div>
  );
}

export default App;
