import React from "react";
import {Link} from 'react-router-dom';
import { scaleDown	 as Menu } from 'react-burger-menu'

class BMenu extends React.Component {

  render () {
    return (
      <Menu  isOpen={this.props.state}>
        <div id="mvp-fly-wrap">
        <div id="mvp-fly-menu-wrap">
            <nav className="mvp-fly-nav-menu left relative">
                <ul >
                    
                <li><Link to={"/news/features"}  onClick={this.props.handler}>FEATURES</Link></li>

                <li><Link to={"/news/buy theme"}  onClick={this.props.handler}>BUY THEME</Link></li>

                <li><Link to={"/news/entertainment"} onClick={this.props.handler}>ENTERTAINMENT</Link></li>

                <li><Link to={"/news/politics"}  onClick={this.props.handler}>POLITICS</Link></li>

                <li><Link to={"/news/fashion"}  onClick={this.props.handler}>FASHION</Link></li>

                <li><Link to={"/news/sports"}  onClick={this.props.handler}>SPORTS</Link></li>

                <li><Link to={"/news/tech"}  onClick={this.props.handler}>TECH</Link></li>

                <li><Link to={"/news/business"} onClick={this.props.handler}>BUSINESS</Link></li>

                
                </ul>
            </nav>
        </div>
        <div id="mvp-fly-soc-wrap">
            <span className="mvp-fly-soc-head">Connect with us</span>
            <ul className="mvp-fly-soc-list left relative">

              <li><a href={"https://www.facebook.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-facebook fa-2"><span></span></a></li>
          
              <li><a href={"https://twitter.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-twitter fa-2"><span></span></a></li>
            
              <li><a href={"https://www.instagram.com/"} rel="noopener noreferrer" target="_blank" className="fa fa-instagram fa-2"><span></span></a></li>

              <li><a href={"https://www.youtube.com/"}  rel="noopener noreferrer" target="_blank" className="fa fa-youtube-play fa-2"><span></span></a></li>
           
            </ul>
        </div>
    </div>
      </Menu>
    );
  }
}
export default BMenu;