import React, { Component } from 'react'

export default class EditJob extends Component {
  constructor(props) {
    super(props)

    this.state = {
      store: props.job.store,
      jobNumber: props.job.jobNumber,
      dateReceived: props.job.dateReceived,
      dateDue: props.job.dateDue,
      customerName: props.job.customerName,
      itemDescription: props.job.itemDescription,
      size: props.job.size,
      additionalWork: props.job.additionalWork,
      additionalPrice: props.job.additionalPrice,
      sizeUp: props.job.sizeUp,
      sizeDown: props.job.sizeDown,
      solderTogether: props.job.solderTogether,
      halfShank: props.job.halfShank,
      solderChain: props.job.solderChain,
      retip: props.job.retip,
      engraving: props.job.engraving,
      polishing: props.job.polishing,
      rhodium: props.job.rhodium,
      reset: props.job.reset,
      tighten: props.job.tighten,
      bale: props.job.bale,
      laserChain: props.job.laserChain,
      jumpRing: props.job.jumpRing,
      lobsterClasp: props.job.lobsterClasp,
      barrelClasp: props.job.barrelClasp,
      pearl: props.job.pearl,
      earingPost: props.job.earingPost,
      tieTac: props.job.tieTac,
      metalFinish: props.job.metalFinish,
      beadsOnShank: props.job.beadsOnShank,
      arthriticShank: props.job.arthriticShank,
      imageUrl1: props.job.imageUrl1,
      imageUrl2: props.job.imageUrl2,
      id: props.job.id
    }
  }
  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  handleUpdateClick = () => {
    let job = this.state

    this.props.updateJob(job)
    this.props.toggleEdit()
  }
  handleDeleteClick = () => {
    let job = this.state

    this.props.deleteJob(job)
    this.props.toggleEdit()
  }
  render() {
    return (
      <div className='jobDiv'>
        <div className='jobInfo'>
          <div className='jobInput'>
            <input onChange={this.handleChange} value={this.state.store} name='store' type='text' placeholder="Store" list='stores'></input>
            <datalist id='stores'>
              <option value="The Gift House" />
              <option value="Fred Meyer North Ogden " />
              <option value="Morgan NewGate" />
              <option value="Shellys" />
              <option value="Nancys" />
              <option value="Morgan Layton" />
              <option value="Fred Meyer Bountiful" />
              <option value="Fred Meyer Holiday" />
            </datalist>
            <input onChange={this.handleChange} value={this.state.jobNumber} name='jobNumber' type='text' placeholder='Job Number' />
            <input onChange={this.handleChange} value={this.state.dateReceived} name='dateReceived' type='text' placeholder='Date Received' />
            <input onChange={this.handleChange} value={this.state.dateDue} name='dateDue' type='text' placeholder='Date Due' />
            <input onChange={this.handleChange} value={this.state.customerName} name='customerName' type='text' placeholder='Customer Name' />
            <input onChange={this.handleChange} value={this.state.itemDescription} name='itemDescription' type='text' placeholder='Item Description' />
            <input onChange={this.handleChange} value={this.state.size} name='size' type='number' placeholder='Size' />
            <input onChange={this.handleChange} value={this.state.additionalWork} name='additionalWork' type='text' placeholder='Additional Work' />
            <input onChange={this.handleChange} value={this.state.additionalPrice} name='additionalPrice' type='number' placeholder='Additional Price' />
          </div>

          <div className="workNeeded">
            <h3>Edit Job</h3>
            <div className='columnDiv'>
              <div className='column'>
                <label>Size up: <input onChange={this.handleChange} value={this.state.sizeUp} name='sizeUp' type='number' className='numBox' /></label>
                <label>Size down: <input onChange={this.handleChange} value={this.state.sizeDown} name='sizeDown' type='number' className='numBox' /></label>
                <label>Solder Together: <input onChange={this.handleChange} value={this.state.solderTogether} name='solderTogether' type='number' className='numBox' /></label>
                <label>Half Shank:<input onChange={this.handleChange} value={this.state.halfShank} name='halfShank' type='number' className='numBox' /> </label>
                <label>Solder Chain:<input onChange={this.handleChange} value={this.state.solderChain} name='solderChain' type='number' className='numBox' /> </label>
                <label>Re-tip prongs: <input onChange={this.handleChange} value={this.state.retip} name='retip' type='number' className='numBox' /></label>
                <label>Engraving: <input onChange={this.handleChange} value={this.state.engraving} name='engraving' type='number' className='numBox' /></label>
                <label>Polishing: <input onChange={this.handleChange} value={this.state.polishing} name='polishing' type='number' className='numBox' /></label>
                <label>Rhodium Plating: <input onChange={this.handleChange} value={this.state.rhodium} name='rhodium' type='number' className='numBox' /></label>
                <label>Reset Diamonds: <input onChange={this.handleChange} value={this.state.reset} name='reset' type='number' className='numBox' /></label>
                <label>Tighten Diamonds: <input onChange={this.handleChange} value={this.state.tighten} name='tighten' type='number' className='numBox' /></label>
              </div>
              <div className="column">
                <label>Chain Bale: <input onChange={this.handleChange} value={this.state.bale} name='bale' type='number' className='numBox' /></label>
                <label>Chain Laser: <input onChange={this.handleChange} value={this.state.laserChain} name='laserChain' type='number' className='numBox' /></label>
                <label>Jump Ring: <input onChange={this.handleChange} value={this.state.jumpRing} name='jumpRing' type='number' className='numBox' /></label>
                <label>Lobster Clasp:<input onChange={this.handleChange} value={this.state.lobsterClasp} name='lobsterClasp' type='number' className='numBox' /> </label>
                <label>Barrel Clasp:<input onChange={this.handleChange} value={this.state.barrelClasp} name='barrelClasp' type='number' className='numBox' /> </label>
                <label>Pearl Ring: <input onChange={this.handleChange} value={this.state.pearl} name='pearl' type='number' className='numBox' /></label>
                <label>Earing posts: <input onChange={this.handleChange} value={this.state.earingPost} name='earingPost' type='number' className='numBox' /></label>
                <label>Tie Tac: <input onChange={this.handleChange} value={this.state.tieTac} name='tieTac' type='number' className='numBox' /></label>
                <label>Metal Finish: <input onChange={this.handleChange} value={this.state.metalFinish} name='metalFinish' type='number' className='numBox' /></label>
                <label>Beads on Shank: <input onChange={this.handleChange} value={this.state.beadsOnShank} name='beadsOnShank' type='number' className='numBox' /></label>
                <label>Arthritic Shank: <input onChange={this.handleChange} value={this.state.arthriticShank} name='arthriticShank' type='number' className='numBox' /></label>
              </div>
            </div>
          </div>
          <div className="imageInputs">
            <input placeholder='Image URL' value={this.state.imageUrl1} className="imageInput" name='imageUrl1' type='text' onChange={this.handleChange} />
            <input placeholder='Image URL' value={this.state.imageUrl2} className="imageInput" name='imageUrl2' type='text' onChange={this.handleChange} />
            <div className='navButtons'>
              <button className='create' onClick={this.handleUpdateClick}>Update Job</button>
              <button className='create' onClick={this.handleDeleteClick}>Delete Job</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}