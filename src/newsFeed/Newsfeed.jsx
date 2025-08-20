import { useNewsContext } from "../context/Context"
import ErrorMessage from "../errorMessage/ErrorMessage"
import Loader from "../loader/Loader"
import NewsCard from "../NewsCard/NewsCard"
import Pagination from "../pagination/Pagination"
import './newsfeed.css'
export function NewsFeed(){
    const {articles , loading , error , currentPage ,setCurrentPage , totalResults} = useNewsContext()
    if(loading) return <Loader />
    if(error) return <ErrorMessage message={error} />
    return(
      <div className="news-feed" >
{articles.length === 0 ?( <p> no news found </p> ):(
<>
    <div className="news-grid">
            {
                articles.map((article,index)=>(
                    <NewsCard key={index} article={article} />
                ))
            }
    </div>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={totalResults} />
</>
)}


      </div>
    )
}