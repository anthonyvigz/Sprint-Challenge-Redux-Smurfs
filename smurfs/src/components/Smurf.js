import React from 'react';

const Smurf = (props) => {
    return (
        <div className="smurfcard">
            <h1>{props.smurf.name}</h1>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
        </div>

    )
}

export default Smurf;