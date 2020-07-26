import React from "react";



class Footer extends React.Component {
  
  render() {
    return (
      <footer  id="mvp-foot-wrap" className="left relative">
      <div id="mvp-foot-top" className="left relative">
        <div className="mvp-main-box">
          <div  id="mvp-foot-logo" className="left relative">
              <a href="/"><img src={require("../images/logo-large.png")} alt="" data-rjs="2" /></a>
          </div>
          <div  id="mvp-foot-soc" className="left relative">
            <ul className="mvp-foot-soc-list left relative">
             
                <li><a href="#" target="_blank" className="fa fa-facebook fa-2"></a></li>
            
                <li><a href="#" target="_blank" className="fa fa-twitter fa-2"></a></li>
             
                <li><a href="#" target="_blank" className="fa fa-instagram fa-2"></a></li>

                <li><a href="#" target="_blank" className="fa fa-youtube-play fa-2"></a></li>
              
            </ul>
          </div>
          <div id="mvp-foot-menu-wrap" className="left relative">
            <div id="mvp-foot-menu" className="left relative">
            <ul className="mvp-foot-menu-list">
             
             <li><a href="#" target="_blank" >BUY THEME</a></li>
         
             <li><a href="#" target="_blank">ENTERTAINMENT</a></li>
           
             <li><a href="#" target="_blank" >FASHION</a></li>
          
             <li><a href="#" target="_blank" >SPORTS</a></li>
         
             <li><a href="#" target="_blank" >BUSINESS</a></li>
       
             <li><a href="#" target="_blank" >SHOP</a></li>
           
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
