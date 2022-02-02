import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
    </div>
    <BlogList />
  </div>
)

export default Home
