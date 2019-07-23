import React, { Component } from 'react';
import { connect } from 'react-redux'
import Smurf from './Smurf'
import { addSmurf } from '../actions/index'
import { Link } from 'react-router-dom'

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

    /// creating function to add smurf to the store

    addSmurf = (event) => {
        event.preventDefault();

        const { name, age, height, smurfs } = this.state;

        this.props.addSmurf({ name, age, height })

        this.setState({
            ...smurfs,
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        /// deconstructors for props and state

        const { smurfs } = this.props;
        const { name, age, height } = this.state;

        /// returns the Smurf cards that have info for each smurf

        return (
            <div className="cardsandform">
                <form onSubmit={this.addSmurf}>
                    <h1>Add a Smurf!</h1>
                    <input 
                        type="text" 
                        name="name" value={name} 
                        placeholder="Name" 
                        onChange={this.handleChange}
                        maxlength="10" 
                    />
                    <input 
                        type="text" 
                        name="age" value={age} 
                        placeholder="Age" 
                        onChange={this.handleChange}
                        maxlength="5" 
                    />
                    <input 
                        type="text" 
                        name="height" 
                        value={height} 
                        placeholder="Height" 
                        onChange={this.handleChange}
                        maxlength="5"
                    />
                    <button type="submit">Add Smurf!</button>
                </form>
                <div className="smurfcards">
                {smurfs.map((smurf, index) => {
                    return (
                        <div className="editlink">
                            <Smurf smurf={smurf} key={index} />
                            <Link to={`/smurfs/${smurf.id}`} key={index}><button>Edit</button></Link>
                        </div>
                    )
                })}
                </div>
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
    addSmurf: addSmurf
}

export default(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(SmurfVillage)
)