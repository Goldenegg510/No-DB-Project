let jobs = []
let id = 0

module.exports={
  createJob: (req, res) => {
    let newJob = req.body
    newJob.id = id++
    jobs.push(newJob)
    res.send(jobs)
  },
  readJobs: (req, res) => {
    res.send(jobs)
  },
  updateJob: (req, res) => {
    let {id} = req.params
    let updateJob = req.body
    updateJob.id = id
    let index = jobs.findIndex(job => +job.id === +id)
    if(index !== -1){
    jobs.splice(index, 1, updateJob)
  }
    res.send(jobs)
  },
  deleteJob: (req, res) => {
    let {id} = req.params
    let index = jobs.findIndex(job => +job.id === +id)
    if(index !== -1){
    jobs.splice(index, 1)
  }
    res.send(jobs)
  }
}