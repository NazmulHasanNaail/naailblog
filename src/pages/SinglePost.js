import Post from "../components/Post";

function SinglePost ( ){
    let postId = window.location.pathname.match(/\d+/g);

    return(
        <>
            <Post postId={postId} />
        </>
    )
}
export default SinglePost;