import React, {Component} from 'react'
import EditJob from './EditJob'

export default class Job extends Component {
  constructor(){
    super()
    this.state = {
      edit: false 
    }
  }
  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }
  render(){
    let {job} = this.props
    return (
      this.state.edit ? <EditJob job={job} toggleEdit={this.toggleEdit} deleteJob={this.props.deleteJob} updateJob={this.props.updateJob}/> :
      <div>
        <div>Name: {job.customerName}</div>
        <div>Job Number: {job.jobNumber}</div>
        <img src={job.imageUrl1} alt=''></img>
        <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }
}