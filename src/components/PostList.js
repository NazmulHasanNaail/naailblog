import {useState, useEffect} from 'react';
import { fetchPostList } from "../actions";
import {Calendar} from "../icons/Calendar";
import {Link} from "react-router-dom";

function PostList({postList}){

    return(
        <div className='row'>
            {
                postList.map((post)=>
                    <div className='col-md-4' key={post.id}>
                        <article className="post">
                            <div className="thumbnaail">
                                <img src={post.featured_image_url} alt={post.title.rendered}/>
                            </div>
                            <div className="post-meta fs-small">
                                <span className='calendar-icon'>{<Calendar />}</span>
                                <time dateTime={post.date}>{post.date.split("T", 1)}</time>
                            </div>
                            <h3 className="post-title"><Link to={'post/'+post.id}>{post.title.rendered}</Link></h3>
                            <div className="post-content" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}} />
                        </article>
                    </div>
                )
            }
        </div>
    )
}

export default PostList;