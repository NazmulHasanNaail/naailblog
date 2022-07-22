import {useState, useEffect} from 'react';
import { fetchPostList } from "../actions";

function PostList({postList}){

    return(
        postList.map((item)=>
            <article className="post">
                <div className="thumbnaail">thumbnaail</div>
                <h3 className="post-title">title</h3>
                <div className="post-meta">postmet</div>
                <div className="post-content">post</div>
            </article>
        )
    )
}

export default PostList;