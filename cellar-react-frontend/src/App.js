import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import WineList from './WineList'
import ShowWine from './ShowWine'
import NewWine from './NewWine'
import Cellar_Logo_white from './Images/Cellar_Logo_white.svg'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wines: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3000/wines')
      .then(res => {
        this.setState({
          wines: res.data
        })
      })
  }

  render () {
    return (
      <div>
        <nav>
          <img className='cellarSmall' src={Cellar_Logo_white} alt='logo' />
          <Link to='/wines'>Home</Link>
          <Link to='/wines/new'>New</Link>
        </nav>
        <main>
          <Switch>
            <Route path='/wines/new/:id?' render={props => (
              <NewWine
                id={this.state.idToEdit}
                {...props}
              />
            )}
            />
            {<Route exact path='/wines/:id' render={props => (
              <ShowWine
                {...props}
                editWine={this.editWine}
                wines={this.state.wines}
              />
            )}
            />}
            <Route path='/wines' render={props => (
              <WineList
                {...props}
                wines={this.state.wines}
              />
            )}
            />
            <Route path='/*' render={() => <Redirect to='/wines' />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
