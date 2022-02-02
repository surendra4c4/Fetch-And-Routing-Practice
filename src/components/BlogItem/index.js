// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="link-class">
      <div className="item-container">
        <img src={imageUrl} alt="img url" className="image" />
        <div>
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details-container">
            <img src={avatarUrl} alt="avatar url" className="avatar" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
