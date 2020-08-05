import React from "react";
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  
  render() {
    return (
      <footer  id="mvp-foot-wrap" className="left relative">
      <div id="mvp-foot-top" className="left relative">
        <div className="mvp-main-box">
          <div  id="mvp-foot-logo" className="left relative">
              <Link to={"/"}><img src={require("../images/logo-large.png")} alt="" data-rjs="2" /></Link>
          </div>
          <div  id="mvp-foot-soc" className="left relative">
            <ul className="mvp-foot-soc-list left relative">
             
              <li><a href={"https://www.facebook.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-twitter fa-2" ><span></span></a></li>
            
              <li><a href={"https://twitter.com/"}  rel="noopener noreferrer" target="_blank" className="fa fa-twitter fa-2"><span></span></a></li>
            
              <li><a href={"https://www.instagram.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-instagram fa-2"><span></span></a></li>

              <li><a href={"https://www.youtube.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-youtube-play fa-2"><span></span></a></li>
                          
            </ul>
          </div>
          <div id="mvp-foot-menu-wrap" className="left relative">
            <div id="mvp-foot-menu" className="left relative">
              <ul className="mvp-foot-menu-list">
              
                <li><Link to={"/"}  >Home</Link></li>
                <li><Link to={"/news/politics"}  >POLITICS</Link></li>
                <li><Link to={"/news/business"} >BUSINESS</Link></li>
                <li><Link to={"/news/sports"}  >SPORTS</Link></li>
                <li><Link to={"/news/tech"}  >TECH</Link></li>
                <li><Link to={"/news/entertainment"} >ENTERTAINMENT</Link></li>
                <li><Link to={"/news/lifestyle"}  >Lifestyle</Link></li>
                <li><Link to={"/news/world"}  >World</Link></li>
                <li><Link to={"/terms"}  >TERMS OF USE</Link></li>
                <li><Link to={"/privacy"}  >PRIVACY POLICY</Link></li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="mvp-foot-bot" className="left relative">
        <div className="mvp-main-box">
          <div id="mvp-foot-copy" className="left relative">
            <p>Copyright © {new Date().getFullYear()} Arabic World Press, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}
export default Footer;
