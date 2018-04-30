import React, { Component } from 'react'
import AddWine from './Images/AddWine.svg'
import axios from 'axios'

class NewWine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      producer: '',
      color: '',
      varietal: '',
      region: '',
      url: '',
      year: 2014,
      inventory: 1,
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount () {
    if (this.props.location.state) {
      this.setState({
        ...this.props.location.state.wine
      })
    }
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  onSubmit (e) {
    e.preventDefault()
    axios.post('http://localhost:3000/wines', this.state)
      .then(response => console.log(response))
  }

  render () {
    return (
      <div className='add'>
        <form className='forms'>
          <img className='listHeader' src={AddWine} alt='edit' />
          <label>Producer:</label><br />
          <input type='text' name='producer' value={this.state.producer} size='50' onChange={this.handleChange} /><br />
          <label>Color:</label><br />
          <input type='text' name='color' value={this.state.color} size='50' onChange={this.handleChange} /><br />
          <label>Varietal:</label><br />
          <input type='text' name='varietal' value={this.state.varietal} size='50' onChange={this.handleChange} /><br />
          <label>Region:</label><br />
          <input type='text' name='region' value={this.state.region} size='50' onChange={this.handleChange} /><br />
          <label>Website:</label><br />
          <input type='text' name='url' value={this.state.url} size='50' onChange={this.handleChange} /><br />
          <label>Year:</label><br />
          <input type='number' name='year' value={this.state.year} onChange={this.handleChange} /><br />
          <label>Inventory:</label><br />
          <input type='number' name='inventory' value={this.state.inventory} onChange={this.handleChange} /><br />
          <label>Notes/Pairing information:</label><br />
          <textarea type='text' name='description' value={this.state.description} rows='5' cols='50' onChange={this.handleChange} /><br />
          <input className='edit' type='submit' value='Submit' onClick={this.onSubmit} />
        </form>
      </div>
    )
  }
}

export default NewWine
