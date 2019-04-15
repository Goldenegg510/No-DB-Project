import React, { Component } from 'react'

export default class CreateJob extends Component {
  constructor() {
    super()
    this.state = {
      store: '',
      jobNumber: '',
      dateReceived: '',
      dateDue: '',
      customerName: '',
      itemDescription: '',
      size: 0,
      additionalWork: '',
      additionalPrice: 0,
      sizeUp: 0,
      sizeDown: 0,
      solderTogether: 0,
      halfShank: 0,
      solderChain: 0,
      retip: 0,
      engraving: 0,
      polishing: 0,
      rhodium: 0,
      reset: 0,
      tighten: 0,
      bale: 0,
      laserChain: 0,
      jumpRing: 0,
      lobsterClasp: 0,
      barrelClasp: 0,
      pearl: 0,
      earingPost: 0,
      tieTac: 0,
      metalFinish: 0,
      beadsOnShank: 0,
      arthriticShank: 0,
      imageUrl1: '',
      imageUrl2: ''
    }
  }
  handleChange = e => {
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  handleClick = () => {
    let newJob = this.state
    this.props.createJob(newJob)
  }
  render() {
    return (
      <div className='jobDiv'>
        <div className='jobInfo'>
          <div className='jobInput'>
            <input onChange={this.handleChange} name='store' type='text' placeholder="Store" list='stores'></input>
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
            <input onChange={this.handleChange} name='jobNumber' type='text' placeholder='Job Number' />
            <input onChange={this.handleChange} name='dateReceived' type='text' placeholder='Date Received' />
            <input onChange={this.handleChange} name='dateDue' type='text' placeholder='Date Due' />
            <input onChange={this.handleChange} name='customerName' type='text' placeholder='Customer Name' />
            <input onChange={this.handleChange} name='itemDescription' type='text' placeholder='Item Description' />
            <input onChange={this.handleChange} name='size' type='number' placeholder='Size' />
            <input onChange={this.handleChange} name='additionalWork' type='text' placeholder='Additional Work' />
            <input onChange={this.handleChange} name='additionalPrice' type='number' placeholder='Additional Price' />
          </div>

          <div className="workNeeded">
            <h3>New Job</h3>
            <div className='columnDiv'>
              <div className='column'>
                <label>Size up: <input onChange={this.handleChange} name='sizeUp' type='number' className='numBox' /></label>
                <label>Size down: <input onChange={this.handleChange} name='sizeDown' type='number' className='numBox' /></label>
                <label>Solder Together: <input onChange={this.handleChange} name='solderTogether' type='number' className='numBox' /></label>
                <label>Half Shank:<input onChange={this.handleChange} name='halfShank' type='number' className='numBox' /> </label>
                <label>Solder Chain:<input onChange={this.handleChange} name='solderChain' type='number' className='numBox' /> </label>
                <label>Re-tip prongs: <input onChange={this.handleChange} name='retip' type='number' className='numBox' /></label>
                <label>Engraving: <input onChange={this.handleChange} name='engraving' type='number' className='numBox' /></label>
                <label>Polishing: <input onChange={this.handleChange} name='polishing' type='number' className='numBox' /></label>
                <label>Rhodium Plating: <input onChange={this.handleChange} name='rhodium' type='number' className='numBox' /></label>
                <label>Reset Diamonds: <input onChange={this.handleChange} name='reset' type='number' className='numBox' /></label>
                <label>Tighten Diamonds: <input onChange={this.handleChange} name='tighten' type='number' className='numBox' /></label>
              </div>
              <div className="column">
                <label>Chain Bale: <input onChange={this.handleChange} name='bale' type='number' className='numBox' /></label>
                <label>Chain Laser: <input onChange={this.handleChange} name='laserChain' type='number' className='numBox' /></label>
                <label>Jump Ring: <input onChange={this.handleChange} name='jumpRing' type='number' className='numBox' /></label>
                <label>Lobster Clasp:<input onChange={this.handleChange} name='lobsterClasp' type='number' className='numBox' /> </label>
                <label>Barrel Clasp:<input onChange={this.handleChange} name='barrelClasp' type='number' className='numBox' /> </label>
                <label>Pearl Ring: <input onChange={this.handleChange} name='pearl' type='number' className='numBox' /></label>
                <label>Earing posts: <input onChange={this.handleChange} name='earingPost' type='number' className='numBox' /></label>
                <label>Tie Tac: <input onChange={this.handleChange} name='tieTac' type='number' className='numBox' /></label>
                <label>Metal Finish: <input onChange={this.handleChange} name='metalFinish' type='number' className='numBox' /></label>
                <label>Beads on Shank: <input onChange={this.handleChange} name='beadsOnShank' type='number' className='numBox' /></label>
                <label>Arthritic Shank: <input onChange={this.handleChange} name='arthriticShank' type='number' className='numBox' /></label>
              </div>
            </div>
          </div>
          <div className="imageInputs">
            <input placeholder='Image URL' className="imageInput" name='imageUrl1' type='text' onChange={this.handleChange} />
            <input placeholder='Image URL' className="imageInput" name='imageUrl2' type='text' onChange={this.handleChange} />
            <div className='navButtons'>
              <button className='create' onClick={this.handleClick}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}