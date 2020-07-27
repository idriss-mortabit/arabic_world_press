import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <center><h3 style={{padding: "10px", width: "70%"}}>I hate networking.” We hear this all the time from executives, other professionals, and MBA students. They tell us that networking makes them feel uncomfortable and phony—even dirty. Although some people have a natural passion for it—namely, the extroverts who love and thrive on social interaction—many understandably see it as brown-nosing, exploitative, and inauthentic.

But in today’s world, networking is a necessity. A mountain of research shows that professional networks lead to more job and business opportunities, broader and deeper knowledge, improved capacity to innovate, faster advancement, and greater status and authority. Building and nurturing professional relationships also improves the quality of work and increases job satisfaction.

When we studied 165 lawyers at a large North American law firm, for example, we found that their success depended on their ability to network effectively both internally (to get themselves assigned to choice clients) and externally (to bring business into the firm). Those who regarded these activities as distasteful and avoided them had fewer billable hours than their peers.

Fortunately, our research shows that an aversion to networking can be overcome. We’ve identified four strategies to help people change their mindset.</h3></center>
      <Footer />
    </div>
  );
}

export default App;
