import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSmurf } from '../actions/index'


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

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
        [event.target.name]: event.target.value
    })
  }

  /// sends the new updated smurf to the actions to update the server then state

  updateSmurf = (event) => {
      event.preventDefault();

      const { name, age, height } = this.state;

    this.props.updateSmurf({ name, age, height })
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

const mapDispatchToProps = {
    updateSmurf: updateSmurf
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(EditSmurf)
)