import React from "react";



class Article extends React.Component {

render() {
return (
					<div id="mvp-main-body-wrap" class="left relative">
                    
                    <article id="mvp-article-wrap" itemscope itemtype="http://schema.org/NewsArticle">
                        
                            <meta itemscope itemprop="mainEntityOfPage"  itemType="https://schema.org/WebPage" itemid="<?php the_permalink(); ?>"/>
                            <div id="mvp-article-cont" class="left relative">
                                <div class="mvp-main-box">
                                    <div id="mvp-post-main" class="left relative">
                                        <header id="mvp-post-head" class="left relative">
                                            <h3 class="mvp-post-cat left relative"><a class="mvp-post-cat-link" href="<?php $category = get_the_category(); $category_id = get_cat_ID( $category[0]->cat_name ); $category_link = get_category_link( $category_id ); echo esc_url( $category_link ); ?>"><span class="mvp-post-cat left">categories</span></a></h3>
                                            <h1 class="mvp-post-title left entry-title" itemprop="headline">awpress</h1>
                                           
                                                <span class="mvp-post-excerpt left">expect</span>
                                            
                                                <div class="mvp-author-info-wrap left relative">
                                                    <div class="mvp-author-info-thumb left relative">
                                                        <amp-img src="<?php echo esc_url(get_avatar_url( get_the_author_meta('email') )); ?>" width="46" height="46"  layout="responsive"></amp-img>
                                                    </div>
                                                    <div class="mvp-author-info-text left relative">
                                                        <div class="mvp-author-info-date left relative">
                                                            <p>published</p> <span class="mvp-post-date">time stamp</span> <p>newwws</p> <span class="mvp-post-date updated"><time class="post-date updated" itemprop="datePublished" datetime="<?php the_time('Y-m-d'); ?>">date</time></span>
                                                            <meta itemprop="dateModified" content="<?php the_modified_date('Y-m-d g:i a'); ?>"/>
                                                        </div>
                                                        <div class="mvp-author-info-name left relative" itemprop="author" itemscope itemtype="https://schema.org/Person">
                                                            <p>my news</p> <span class="author-name vcard fn author" itemprop="name">the link</span> <a href="<?php echo esc_url(the_author_meta('twitter')); ?>" class="mvp-twit-but" target="_blank"><span class="mvp-author-info-twit-but"><i class="fa fa-twitter fa-2"></i></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                        </header>
                                                <div id="mvp-post-content" class="left relative">
                                                                <div id="mvp-post-feat-img" class="left relative mvp-post-feat-img-wide2" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
                                                             
                                                                    <amp-img src="<?php echo esc_url($mvp_thumb_url) ?>" layout="responsive"></amp-img>
                                                                    <meta itemprop="url" content="<?php echo esc_url($mvp_thumb_url) ?>"/>
                                                                    <meta itemprop="width" content="<?php echo esc_html($mvp_thumb_width) ?>"/>
                                                                    <meta itemprop="height" content="<?php echo esc_html($mvp_thumb_height) ?>"/>
                                                                </div>
                                                                    <span class="mvp-feat-caption">cossa</span>
                                                                
                                                        <div class="mvp-post-img-hide" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
                                                            <meta itemprop="url" content="<?php echo esc_url($mvp_thumb_url) ?>"/>
                                                            <meta itemprop="width" content="<?php echo esc_html($mvp_thumb_width) ?>"/>
                                                            <meta itemprop="height" content="<?php echo esc_html($mvp_thumb_height) ?>"/>
                                                        </div>
                                                    <div class="mvp-post-img-hide" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
                                                        <meta itemprop="url" content="<?php echo esc_url($mvp_thumb_url) ?>" />
                                                        <meta itemprop="width" content="<?php echo esc_html($mvp_thumb_width) ?>"/>
                                                        <meta itemprop="height" content="<?php echo esc_html($mvp_thumb_height) ?>"/>
                                                    </div>
                                                <div id="mvp-content-wrap" class="left relative">
                                                            <div id="mvp-content-body" class="left relative">
                                                                <div id="mvp-content-body-top" class="left relative">
                                                                    <div id="mvp-content-main" class="left relative">
                                                                       
                                                                    </div>
                                                                    <div id="mvp-content-bot" class="left">
                                                                        <div class="mvp-post-tags">
                                                                            <span class="mvp-post-tags-header">zox news</span><span itemprop="keywords">loli</span>
                                                                    </div>
                                                                    <div class="mvp-org-wrap" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                                                                        <div class="mvp-org-logo" itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                                                                            
                                                                                <amp-img src={require("../images/logo-nav.png")} alt="name" data-rjs="2" height="30" layout="fixed"></amp-img>
                                                                                <meta itemprop="url" content="../images/logo-nav.png"/>
                                                                            
                                                                        </div>
                                                                        <meta itemprop="name" content="name"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                            </div>
                                                    
                                                        <a href="<?php the_permalink() ?>#mvp-comments-button">
                                                        <div id="mvp-comments-button" class="left relative">
                                                            <span class="mvp-comment-but-text">comments</span>
                                                        </div>
                                                        </a>
                                                    
                                                        <a href="<?php the_permalink() ?>#mvp-comments-button">
                                                        <div id="mvp-comments-button" class="left relative">
                                                            <span class="mvp-comment-but-text"></span>
                                                        </div>
                                                        </a>
                                                
                                        </div>
                            </div>
                                
                                    <div id="mvp-post-more-wrap" class="left relative">
                                        <h4 class="mvp-widget-home-title">
                                            <span class="mvp-widget-home-title">coli</span>
                                        </h4>
                                        <ul class="mvp-post-more-list left relative">
                                   
                                                <li>
                                                    
                                                        <div class="mvp-post-more-img left relative">
                                                            <a href="<?php the_permalink(); ?>" rel="bookmark">
                                                            
                                                            <amp-img class="mvp-reg-img" src="<?php echo esc_url($mvp_thumb_url) ?>" width="<?php echo esc_html($mvp_thumb_width) ?>" height="<?php echo esc_html($mvp_thumb_height) ?>" layout="responsive"></amp-img>
                                                            
                                                            <amp-img class="mvp-mob-img" src="<?php echo esc_url($mvp_thumb_url) ?>" width="<?php echo esc_html($mvp_thumb_width) ?>" height="<?php echo esc_html($mvp_thumb_height) ?>" layout="responsive"></amp-img>
                                                            </a>
                                                        </div>
                                                    <div class="mvp-post-more-text left relative">
                                                        <a href="<?php the_permalink(); ?>" rel="bookmark">
                                                        <div class="mvp-cat-date-wrap left relative">
                                                            <span class="mvp-cd-cat left relative"> article2</span><span class="mvp-cd-date left relative">time </span>
                                                        </div>
                                                        <p>   article1 </p>
                                                        </a>
                                                    </div>
                                                </li>
                                            
                                        </ul>
                                    </div>

                            </div>
                        </div>
                </article>
            </div>
            )
            }
            }
export default Article;