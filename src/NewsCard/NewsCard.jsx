import './newscard.css'

function NewsCard({article}) {
  return (
    <div className='news-Card' >
      <img src={article.urlToImage} alt="" className='news-image' />
      <div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url}>Read more</a>
      </div>
    </div>
  )
}

export default NewsCard
