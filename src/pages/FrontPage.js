import {useState, useEffect} from 'react';
import {fetchPostList, noOfPagesForPost} from "../actions";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

function FrontPage(){
    const [postList, setPostList] = useState([]);
    const [noOfPage, setNoOfPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        fetchPostList(currentPage)
            .then( data => setPostList(data));

        noOfPagesForPost()
            .then(pages => setNoOfPage(pages))
    }, []);

    const currentPageHandler = (currentPage) => {
        setCurrentPage(currentPage);
        fetchPostList( currentPage)
            .then( data => setPostList(data));
    }
    const prevPageHandler = () =>{
        if(currentPage > 1 ){
            setCurrentPage((currentPage) => currentPage -1);
        }

        fetchPostList( currentPage)
            .then( data => setPostList(data));
    }

    const nextPageHandler = () =>{
        if(currentPage < noOfPage ){
            setCurrentPage((currentPage) => currentPage +1);
        }

        fetchPostList( currentPage)
            .then( data => setPostList(data));
    }
    return (
        <>
            <PostList postList={postList} />
            <Pagination
                noOfPage={noOfPage}
                currentPage={currentPage}
                currentPageHandler={currentPageHandler}
                prevPageHandler={prevPageHandler}
                nextPageHandler={nextPageHandler}/>
        </>
    )
}
export  default  FrontPage;