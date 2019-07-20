import React, { Component } from 'react';
import { connect } from 'react-redux'
import Smurf from './Smurf'

class SmurfVillage extends Component {
    constructor() {
        super();
        this.state = {
            smurfs: [],
            name: '',
            age: '',
            height: ''
        }
    }

    /// handles the value change in the form

    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { smurfs } = this.props;
        const { name, age, height } = this.state;

        /// returns the Smurf cards that have info for each smurf

        return (
            <div>
                <div className="smurfcards">
                {smurfs.map((smurf) => {
                    return <Smurf smurf={smurf} key={smurf.id} />
                })}
                </div>
                <form>
                    <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange} />
                    <input type="number" name="age" value={age} placeholder="Age" onChange={this.handleChange} />
                    <input type="text" name="height" value={height} placeholder="Height" onChange={this.handleChange} />
                    <button type="submit">Add Smurf!</button>
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
	)(SmurfVillage)
)