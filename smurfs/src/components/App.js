import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions/index'
import { connect } from 'react-redux'
import SmurfVillage from './SmurfVillage'
import { Route } from 'react-router-dom'
import EditSmurf from './EditSmurf'

class App extends Component {
  
  
  // fetches all the smurfs to the state on load

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  
  render() {
    return (
      <div className="mainbody">
        <div className="headertitle">The Smurf Village</div>
        <div className="App">
          <Route exact path="/" component={SmurfVillage} />
          <Route exact path="/smurfs/:id" component={EditSmurf} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSmurfs: getSmurfs
}

export default(
	connect(
		null,
		mapDispatchToProps,
	)(App)
)