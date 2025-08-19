import { useNewsContext } from "../context/Context"
import NewsCard from "../NewsCard/NewsCard"
import './newsfeed.css'
export function NewsFeed(){
    const {articles , loading , error } = useNewsContext()
    return(
      <div className="news-feed" >
{articles.length === 0 ?( <p> no news found </p> ):(
    <div className="news-grid">
            {
                articles.map((article,index)=>(
                    <NewsCard key={index} article={article} />
                ))
            }
    </div>
)}


      </div>
    )
}