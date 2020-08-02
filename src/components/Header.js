import React from "react";
import BMenu from "./DownMenu";

class Header extends React.Component {
    constructor(){
        super();
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
                                                    
                                                        <a href="#" target="_blank"><span className="mvp-nav-soc-but fa fa-facebook fa-2"></span></a>
                                                    
                                                        <a href="#" target="_blank"><span className="mvp-nav-soc-but fa fa-twitter fa-2"></span></a>
                                                    
                                                        <a href="#" target="_blank"><span className="mvp-nav-soc-but fa fa-instagram fa-2"></span></a>
                                                   
                                                        <a href="#" target="_blank"><span className="mvp-nav-soc-but fa fa-youtube-play fa-2"></span></a>
                                                    
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
                                                    
                                                        <a className="mvp-nav-logo-reg" itemprop="url" href="#"><img itemprop="logo" src="#" alt="" data-rjs="2" /></a>
                                                    
                                                        <a className="mvp-nav-logo-reg" itemprop="url" href="#"><img itemprop="logo" src={require("../images/logo-large.png")} alt="" data-rjs="2" /></a>
                                                    
                                                        <a className="mvp-nav-logo-small" href="#"><img src="#" alt="" data-rjs="2" /></a>
                                                    
                                                        <a className="mvp-nav-logo-small" href="#"><img src={require("../images/logo-nav.png")} alt="" data-rjs="2" /></a>
                                                   
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
                
                                                            <li><a href="#" target="_blank" >FEATURES</a></li>

                                                            <li><a href="#" target="_blank" >BUY THEME</a></li>

                                                            <li><a href="#" target="_blank">ENTERTAINMENT</a></li>

                                                            <li><a href="#" target="_blank" >POLITICS</a></li>

                                                            <li><a href="#" target="_blank" >FASHION</a></li>
                                                        
                                                            <li><a href="#" target="_blank" >SPORTS</a></li>
                                                        
                                                            <li><a href="#" target="_blank" >TECH</a></li>

                                                            <li><a href="#" target="_blank" >BUSINESS</a></li>
                                            
                                                        
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mvp-nav-bot-right left relative">
                                        <span className="mvp-nav-search-but fa fa-search fa-2 mvp-search-click"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>  
    </header>
        <BMenu state={this.state.render}/>
    </div>
        );
    }
  }
  export default Header;