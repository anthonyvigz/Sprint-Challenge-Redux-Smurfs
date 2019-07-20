import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSmurf, deleteSmurf } from '../actions/index'


class EditSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: ''
    };
  }

  componentDidMount() {
    const smurf = this.props.smurfs.find(i => String(i.id) === this.props.match.params.id);

    this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id
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

    const { name, age, height, id } = this.state;

    this.props.updateSmurf({ name, age, height }, id );

    this.props.history.push("/");
  }

  /// this will send a request to delete the current smurf

  deleteSmurf = (event) => {
      event.preventDefault();

      const { id } = this.state;

      this.props.deleteSmurf(id);

      this.props.history.push("/");
  }


  render() {

      // deconstructing state with smurf properties
      const { name, age, height } = this.state
      
      return (
        <div className="SmurfForm">
            <h1>Edit Smurf!</h1>
            <div className="smurfname">{name}</div>
            <form onSubmit={this.updateSmurf}>
                <input
                    onChange={this.handleChange}
                    placeholder="name"
                    value={name}
                    name="name"
                    maxlength="10"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="age"
                    value={age}
                    name="age"
                    maxlength="4"
                />
                <input
                    onChange={this.handleChange}
                    placeholder="height"
                    value={height}
                    name="height"
                    maxlength="5"
                />
            <button type="submit">Update Smurf</button>
            <button className="delete" onClick={this.deleteSmurf}>Delete</button>
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
    updateSmurf: updateSmurf,
    deleteSmurf: deleteSmurf
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(EditSmurf)
)