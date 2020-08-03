import React from "react";
import {Link} from 'react-router-dom';
import { scaleDown	 as Menu } from 'react-burger-menu'

class BMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: props.state};
}
componentWillReceiveProps(props) {

    this.setState({ open: props.state });

}
  render () {
    return (
      <Menu  isOpen={this.state.open}>
        <div id="mvp-fly-wrap">
        <div id="mvp-fly-menu-wrap">
            <nav className="mvp-fly-nav-menu left relative">
                <ul >
                    
                <li><Link to={"/news/features"}  onClick={()=>this.setState({open: false}, this.props.handler)}>FEATURES</Link></li>

                <li><Link to={"/news/buy theme"}  onClick={()=>this.setState({open: false}, this.props.handler)}>BUY THEME</Link></li>

                <li><Link to={"/news/entertainment"} onClick={()=>this.setState({open: false}, this.props.handler)}>ENTERTAINMENT</Link></li>

                <li><Link to={"/news/politics"}  onClick={()=>this.setState({open: false}, this.props.handler)}>POLITICS</Link></li>

                <li><Link to={"/news/fashion"}  onClick={()=>this.setState({open: false}, this.props.handler)}>FASHION</Link></li>

                <li><Link to={"/news/sports"}  onClick={()=>this.setState({open: false}, this.props.handler)}>SPORTS</Link></li>

                <li><Link to={"/news/tech"}  onClick={()=>this.setState({open: false}, this.props.handler)}>TECH</Link></li>

                <li><Link to={"/news/business"} onClick={()=>this.setState({open: false}, this.props.handler)}>BUSINESS</Link></li>

                
                </ul>
            </nav>
        </div>
        <div id="mvp-fly-soc-wrap">
            <span className="mvp-fly-soc-head">Connect with us</span>
            <ul className="mvp-fly-soc-list left relative">

              <li><a href={"https://www.facebook.com/"} target="_blank" className="fa fa-facebook fa-2"></a></li>
          
              <li><a href={"https://twitter.com/"} target="_blank" className="fa fa-twitter fa-2"></a></li>
            
              <li><a href={"https://www.instagram.com/"} target="_blank" className="fa fa-instagram fa-2"></a></li>

              <li><a href={"https://www.youtube.com/"}  target="_blank" className="fa fa-youtube-play fa-2"></a></li>
           
            </ul>
        </div>
    </div>
      </Menu>
    );
  }
}
export default BMenu;