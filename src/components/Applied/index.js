import {Link} from 'react-router-dom'
import './index.css'

const Applied = () => (
  <div className="applied-container">
    <h1>You have Successfully Applied for this Job</h1>
    <p>Explore Other Jobs</p>
    <Link to="/">
      <button type="button">Explore</button>
    </Link>
  </div>
)

export default Applied
