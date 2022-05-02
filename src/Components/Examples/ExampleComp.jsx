import React, { useEffect, useState } from 'react';

const ExampleComponent = (props) => {
    console.log(props.prop1);
    console.log(props.prop2);

    const randomNumber = Math.random();

    const array = [1,2,3,4,5,6,7];

    const [state, setState] = useState(false);

    useEffect(() => {
        // ComponentDidMount
        // ComponentDidUpdate
        // ComponentDidUnmount
    })

    return(
        <div>
            <h1 onClick={() => {setState(randomNumber)}}>
                Example component {randomNumber}
            </h1>
        </div>
    );
}

export default ExampleComponent;