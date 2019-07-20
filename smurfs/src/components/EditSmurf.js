import React, { Component } from 'react';
import { connect } from 'react-redux'
import { } from '../actions/index'


class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  render() {
      return (
        <h1>hey</h1>
      )
  }
}

export default EditSmurf;