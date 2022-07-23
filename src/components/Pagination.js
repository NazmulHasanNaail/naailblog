function Pagination({noOfPage, currentPage, currentPageHandler, prevPageHandler, nextPageHandler}){
     let totalPage = [];
     for(let i = 1; i <= noOfPage; i++){
         totalPage.push(i);
     }
    return(
        <ul className='naailblog-pagination'>
            {currentPage > 1 ? <li className='pagination-item prev' onClick={()=> prevPageHandler() }>prev</li> : ''}
            {totalPage.map((item) =><li className={currentPage == item ? 'pagination-item active' : 'pagination-item'} onClick={()=>currentPageHandler(item)} >{item}</li>)}
            {currentPage == noOfPage ? '' : <li className='pagination-item next' onClick={()=> nextPageHandler() }>next</li>}
        </ul>
    )
}
export default Pagination;