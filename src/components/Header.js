import React from "react";
import BMenu from "./BMenu";
import {Link} from 'react-router-dom';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {render:false}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({render: !this.state.render});        
    }

  render() {
    return (
        <div>
        <header id="mvp-main-head-wrap" className="left relative">      
            <nav id="mvp-main-nav-wrap" className="left relative">
                <div id="mvp-main-nav-top" className="left relative">
                    <div className="mvp-main-box">
                        <div id="mvp-nav-top-wrap" className="left relative">
                            <div className="mvp-nav-top-right-out left relative">
                                <div className="mvp-nav-top-right-in">
                                    <div className="mvp-nav-top-cont left relative">
                                        <div className="mvp-nav-top-left-out relative">
                                            <div className="mvp-nav-top-left">
                                                <div className="mvp-nav-soc-wrap">
                                                    
                                                        <a href={"https://www.facebook.com/"} rel="noopener noreferrer" target="_blank"><span className="mvp-nav-soc-but fa fa-facebook fa-2"></span></a>
                                                    
                                                        <a href={"https://twitter.com/"} rel="noopener noreferrer" target="_blank"><span className="mvp-nav-soc-but fa fa-twitter fa-2"></span></a>
                                                    
                                                        <a href={"https://www.instagram.com/"} rel="noopener noreferrer" target="_blank"><span className="mvp-nav-soc-but fa fa-instagram fa-2"></span></a>
                                                   
                                                        <a href={"https://www.youtube.com/"} rel="noopener noreferrer" target="_blank"><span className="mvp-nav-soc-but fa fa-youtube-play fa-2"></span></a>
                                                    
                                                </div>
                                               <div className="mvp-fly-but-wrap mvp-fly-but-click left relative"  onClick={this.handleClick}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="mvp-nav-top-left-in">
                                                <div className="mvp-nav-top-mid left relative" itemscope itemtype="http://schema.org/Organization">
                                                
                                                        <Link className="mvp-nav-logo-reg" itemprop="url" to={"/"}><img itemprop="logo" src={require("../images/logo-large.png")} alt="" data-rjs="2" /></Link>
                                                    
                                                        <Link className="mvp-nav-logo-small" to={"/"}><img src={require("../images/logo-nav.png")} alt="" data-rjs="2" /></Link>
                                                   
                                                        <h1 className="mvp-logo-title">Arabic World Press</h1>
                                                   
                                                        <div className="mvp-drop-nav-title left">
                                                            <h4>my arabic world press</h4>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mvp-nav-top-right">
                                    
                                    <span className="mvp-nav-search-but fa fa-search fa-2 mvp-search-click"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mvp-main-nav-bot" className="left relative">
                    <div id="mvp-main-nav-bot-cont" className="left">
                        <div className="mvp-main-box">
                            <div id="mvp-nav-bot-wrap" className="left">
                                <div className="mvp-nav-bot-right-out left">
                                    <div className="mvp-nav-bot-right-in">
                                        <div className="mvp-nav-bot-cont left">
                                            <div className="mvp-nav-bot-left-out">
                                                <div className="mvp-nav-bot-left left relative">
                                                </div>
                                                <div className="mvp-nav-bot-left-in">
                                                    <div className="mvp-nav-menu left">
                                                        <ul classNameName="mvp-foot-menu-list">

                                                            <li><Link to={"/"}  >Home</Link></li>
                                                            <li><Link to={"/news/politics"}  >POLITICS</Link></li>
                                                            <li><Link to={"/news/business"} >BUSINESS</Link></li>
                                                            <li><Link to={"/news/sports"}  >SPORTS</Link></li>
                                                            <li><Link to={"/news/tech"}  >TECH</Link></li>
                                                            <li><Link to={"/news/entertainment"} >ENTERTAINMENT</Link></li>
                                                            <li><Link to={"/news/lifestyle"}  >Lifestyle</Link></li>
                                                            <li><Link to={"/news/world"}  >World</Link></li>
                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>  
    </header>
        <BMenu state={this.state.render} handler = {this.handleClick}/>
    </div>
        );
    }
  }
  export default Header;