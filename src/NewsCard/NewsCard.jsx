import './newscard.css'
import defaultimage from '../assets/defaultimage.jfif'
function NewsCard({article}) {
  const handleimageerror = (e) =>{
    e.target.src = defaultimage
  }
  return (
    <div className='news-Card' >
      <img src={article.urlToImage || defaultimage } alt="" className='news-image' onError={handleimageerror} />
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url}>Read more</a>
      </div>
    </div>
  )
}

export default NewsCard
