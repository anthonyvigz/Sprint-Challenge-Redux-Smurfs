import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions/index'
import { connect } from 'react-redux'
import SmurfVillage from './SmurfVillage'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  
  // fetches all the smurfs to the state on load

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  
  render() {
    return (
      <div className="App">
        <SmurfVillage />
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