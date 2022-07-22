import {useState, useEffect} from 'react';
import { fetchPostList } from "../actions";

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
                            <h3 className="post-title">{post.title.rendered}</h3>
                            <div className="post-meta">
                                <span>Posted on</span>
                                <time dateTime={post.date}>{post.date.split("T", 1)}</time>
                            </div>
                            <div className="post-content" dangerouslySetInnerHTML={{__html:post.excerpt.rendered}} />
                        </article>
                    </div>
                )
            }
        </div>
    )
}

export default PostList;