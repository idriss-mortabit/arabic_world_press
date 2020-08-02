import React from "react";
import { scaleDown	 as Menu } from 'react-burger-menu'

class BMenu extends React.Component {

  render () {
    return (
      <Menu  isOpen={this.props.state}>
        <div id="mvp-fly-wrap">
        <div id="mvp-fly-menu-wrap">
            <nav className="mvp-fly-nav-menu left relative">
                <ul >
                    
                    <li><a href="#" target="_blank" >FEATURES</a></li>

                    <li><a href="#" target="_blank" >BUY THEME</a></li>

                    <li><a href="#" target="_blank">ENTERTAINMENT</a></li>

                    <li><a href="#" target="_blank" >POLITICS</a></li>

                    <li><a href="#" target="_blank" >FASHION</a></li>
                
                    <li><a href="#" target="_blank" >SPORTS</a></li>
                
                    <li><a href="#" target="_blank" >TECH</a></li>

                    <li><a href="#" target="_blank" >BUSINESS</a></li>

                
                </ul>
            </nav>
        </div>
        <div id="mvp-fly-soc-wrap">
            <span className="mvp-fly-soc-head">Connect with us</span>
            <ul className="mvp-fly-soc-list left relative">

             <li><a href="#" target="_blank" className="fa fa-facebook fa-2"></a></li>
         
             <li><a href="#" target="_blank" className="fa fa-twitter fa-2"></a></li>
          
             <li><a href="#" target="_blank" className="fa fa-instagram fa-2"></a></li>

             <li><a href="#" target="_blank" className="fa fa-youtube-play fa-2"></a></li>
           
            </ul>
        </div>
    </div>
      </Menu>
    );
  }
}
export default BMenu;