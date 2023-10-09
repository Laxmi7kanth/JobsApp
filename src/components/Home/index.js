import {Component} from 'react'
import Cookies from 'js-cookie'
import Jobs from '../Jobs'
import './index.css'

class Home extends Component {
  state = {language: '', jobDetails: []}

  onInputChange = event => {
    this.setState({language: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {language} = this.state
    const apiUrl = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a539e013&app_key=19c2e204643c53924a957e5de169a723&results_per_page=20&what=${language}%20developer&content-type=application/json`
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.results.map(eachItem => ({
      id: eachItem.id,
      contractTime: eachItem.contract_time,
      company: eachItem.company.display_name,
      created: eachItem.created,
      location: eachItem.location.area,
      maxSalary: eachItem.salary_max,
      minSalary: eachItem.salary_min,
      title: eachItem.title,
    }))
    this.setState({jobDetails: updatedData})
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {jobDetails} = this.state

    return (
      <div className="home-container">
        <form className="home-content" onSubmit={this.onSubmitForm}>
          <h1 className="home-heading">
            Which programming language jobs are you looking for?
          </h1>
          <input
            placeholder="Enter the Language"
            onChange={this.onInputChange}
          />
          <button type="submit" className="button">
            Proceed
          </button>
        </form>
        <button type="button" className="button" onClick={this.onLogout}>
          Logout
        </button>
        <ul className="ul">
          {jobDetails.map(eachItem => (
            <Jobs eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
