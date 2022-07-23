import {useState, useEffect} from 'react';
import {fetchPost} from "../actions";
import {Calendar} from "../icons/Calendar";
import {Link} from "react-router-dom";

function Post({postId}){

    const [post, setPost] = useState({});

    useEffect(()=>{
        fetchPost(postId)
            .then( data => setPost(data))
    }, [])

    if(Object.keys(post).length){
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <article className="post">
                        <div className="thumbnaail">
                            <img src={post.featured_image_url} alt={post.title.rendered}/>
                        </div>
                        <div className="post-meta fs-small">
                            <span className='calendar-icon'>{<Calendar />}</span>
                            <time dateTime={post.date}>{post.date.split("T", 1)}</time>
                        </div>
                        <h3 className="post-title">{post.title.rendered}</h3>
                        <div className="post-content" dangerouslySetInnerHTML={{__html:post.content.rendered}} />
                    </article>
                </div>
            </div>
        )
    }else {
        return false;
    }
}

export default Post;