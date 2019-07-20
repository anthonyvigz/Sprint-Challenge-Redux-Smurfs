import React, { Component } from 'react';
import { connect } from 'react-redux'
import { } from '../actions/index'


class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    const smurf = this.props.smurfs.find(i => String(i.id) === this.props.match.params.id);

    this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
    })
  }

  render() {

      // deconstructing state with smurf properties
      const { name, age, height } = this.state
      
      return (
        <h1>{name}</h1>
      )
  }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default(
	connect(
		mapStateToProps,
		null,
	)(EditSmurf)
)