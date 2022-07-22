import {useState, useEffect} from 'react';
import { fetchPostList } from "../actions";

import PostList from "../components/PostList";

function FrontPage(){
    const [postList, setPostList] = useState([]);

    useEffect(()=>{
        fetchPostList('1')
            .then( data => setPostList(data))
    }, [])

    return (
        <>
            {<PostList postList={postList} />}
        </>
    )
}
export  default  FrontPage;