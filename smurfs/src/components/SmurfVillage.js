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

    render() {
        const { smurfs } = this.props;

        console.log(smurfs)

        return (
            <div>
                {smurfs.map((smurf) => {
                    return <Smurf smurf={smurf} />
                })}
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