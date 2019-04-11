const express = require('express')
const app = express()
app.use(express.json())
const port = 4952
const JobsCtrl = require('./Controllers/JobsCtrl')

app.get('/api/jobs', JobsCtrl.readJobs)
app.post('/api/jobs', JobsCtrl.createJob)
app.put('/api/jobs/:id', JobsCtrl.updateJob)
app.delete('/api/jobs/:id', JobsCtrl.deleteJob)

app.listen(port, () => {
  console.log('listening on port', port)
})