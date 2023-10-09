import {Link} from 'react-router-dom'
import './index.css'

const Jobs = props => {
  const {eachItem} = props
  const {title, company, maxSalary} = eachItem

  return (
    <div className="job">
      <div>
        <h1 className="heading">Role:{title}</h1>
        <p>Company:{company}</p>
        <p>Package:{maxSalary}</p>
      </div>
      <Link to="/applied">
        <button type="button" className="btn">
          Apply
        </button>
      </Link>
    </div>
  )
}

export default Jobs
