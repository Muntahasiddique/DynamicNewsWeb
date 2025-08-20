import  './Pagination.css'

function Pagination({currentPage ,setCurrentPage , totalResults}) {
    const  pageSize =6
    const totalPages = Math.ceil(totalResults / pageSize)
    const pageNumbers = []
    for(let i = 1 ; i<=totalPages ; i++ ){
        pageNumbers.push(i)
    }
    const HandlePageClick = (pageNumbers) =>{
    setCurrentPage(pageNumbers)
    window.scrollTo({
        top :0,
        behavior:"smooth"
    })
}
    
    return (
    <div className='pagination' >
      <button className='prev-btn' disabled={currentPage  === 1 } onClick={() =>currentPage > 1 && HandlePageClick(currentPage - 1) }  > Prev </button>

      <ul className='page-numbers' >
{
    pageNumbers.map((pageNumber)=>(
        <li key={pageNumber} className={`page-number ${pageNumber === currentPage ? "active" : ""}`} onClick={()=> HandlePageClick(pageNumber) } > {pageNumber} </li>
    ))
}
      </ul>
<button className='next-btn' disabled={currentPage === totalPages} onClick={()=> currentPage < totalPages && HandlePageClick(currentPage + 1) } >
    Next
</button>

    </div>
  )
}

export default Pagination
