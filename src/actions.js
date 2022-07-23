import {
    WP_API, MENU_API, Sidebar_API, FRONT_PAGE, POSTS_PER_PAGE, WP_SITE_DESCRIPTION, WP_SITE_TITLE, WP_SITE_URL, WP_VERSION
} from "./constants";

//Action for retrieving Menu
export  async  function fetchMenu(menLocation){
    const  response = await  fetch(WP_SITE_URL+MENU_API+'menu-locations/'+menLocation);
    return response.json();
}

//Action for retrieving Sidebar
export  async  function fetchSidebar(sidebar){
    const  response = await  fetch(WP_SITE_URL+Sidebar_API+'Sidebars/'+sidebar);
    return response.json();
}

//action for retrieving postList
export  async  function fetchPostList(currentPage){
    const  response = await  fetch(WP_SITE_URL+WP_API+'posts?per_page='+POSTS_PER_PAGE+'&page='+currentPage);
    return response.json();
}

//action for a post
export  async  function fetchPost(postId){
    const  response = await  fetch(WP_SITE_URL+WP_API+'posts/'+postId);
    return response.json();
}

//action for retrieving noOfPages for posts
export  async  function noOfPagesForPost(){
    const  response = await  fetch(WP_SITE_URL+WP_API+'posts');
    return response.headers.get('x-wp-totalpages');
}
