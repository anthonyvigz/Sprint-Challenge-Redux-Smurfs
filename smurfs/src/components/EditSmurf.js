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
        <div className="SmurfForm">
        <h1>Edit Smurf!</h1>
        <form onSubmit={this.changeSmurf}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={height}
            name="height"
          />
          <button type="submit">Update Smurf</button>
          <button onClick={this.deleteSmurf}>Delete</button>
        </form>
      </div>
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