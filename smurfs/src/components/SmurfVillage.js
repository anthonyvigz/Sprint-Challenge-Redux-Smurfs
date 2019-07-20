import React, { Component } from 'react';
import { connect } from 'react-redux'

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
        return (
            <h1>hey</h1>
        )
    }
}

export default(
	connect(
		null,
		null,
	)(SmurfVillage)
)