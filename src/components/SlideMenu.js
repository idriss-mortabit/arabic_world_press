import React from "react";



class SlideMenu extends React.Component {

render() {
return (
<div class="mvp-mega-dropdown">
    <div class="mvp-main-box">
        <ul class="mvp-mega-list">

            <li>
                <a href="#">
                    <div class="mvp-mega-img">
                    <img style={{width:"400" ,height:"240"}} src={require("../images/gamer-400x240.jpg")}  class="attachment-mvp-mid-thumb size-mvp-mid-thumb wp-post-image" alt="" srSet="http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-400x240.jpg 400w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-600x360.jpg 600w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-300x180.jpg 300w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-768x461.jpg 768w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-590x354.jpg 590w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer.jpg 1000w" sizes="(max-width: 400px) 100vw, 400px" />
                        <div class="mvp-vid-box-wrap mvp-vid-box-small mvp-vid-marg-small">
                            <i class="fa fa-play fa-3">
                            </i>
                        </div>
                    </div>
                    <p>
                    Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens
                    </p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="mvp-mega-img">
                    <img style={{width:"400" ,height:"240"}} src={require("../images/gamer-400x240.jpg")}  class="attachment-mvp-mid-thumb size-mvp-mid-thumb wp-post-image" alt="" srSet="http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-400x240.jpg 400w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-600x360.jpg 600w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-300x180.jpg 300w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-768x461.jpg 768w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer-590x354.jpg 590w, http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer.jpg 1000w" sizes="(max-width: 400px) 100vw, 400px" />
                     
                        <div class="mvp-vid-box-wrap mvp-vid-box-small mvp-vid-marg-small">
                            <i class="fa fa-camera fa-3">
                            </i>
                        </div>
                    </div>
                    <p>
                    Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens
                    </p>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="mvp-mega-img">
                    <img style={{width:"400" ,height:"240"}} src={require("../images/gamer-400x240.jpg")}  class="attachment-mvp-mid-thumb size-mvp-mid-thumb wp-post-image" alt="" />
                     
                    </div>
                    <p>
                    Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens
                    </p>
                </a>
            </li>

        </ul>
    </div>
</div>
);
}
}
export default SlideMenu;