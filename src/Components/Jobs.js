import React, {Component} from 'react'
import Axios from 'axios'
import Job from './Job'
import CreateJob from './CreateJob'
import Header from './Header'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      jobs: []
    }
  }
  componentDidMount(){
    Axios.get('/api/jobs').then(res => {
      this.setState({
        jobs: res.data
      })
    }).catch(err => console.log('we have an error', err))
  }
  createJob = (newJob) => {
    Axios.post('/api/jobs', newJob).then((res) => {
      this.setState({
        jobs:res.data
      })
    }).catch(err => console.log('we have an error', err))
  }
  updateJob = (job) => {
    Axios.put(`/api/jobs/${job.id}`, job).then((res) => {
      this.setState({jobs: res.data})
    }).catch(err => console.log('we have a problem:', err))
  }
  deleteJob = (job) => {
    Axios.delete(`/api/jobs/${job.id}`, job).then((res) => {
      this.setState({
        jobs: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CreateJob createJob ={this.createJob} />
        {this.state.jobs.map((job) => {
          return <Job 
                    key={job.id} 
                    job={job} 
                    updateJob= {this.updateJob}
                    deleteJob={this.deleteJob}/>
        })}
      </div>
    )
  }
}