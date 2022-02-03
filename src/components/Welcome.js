import React from 'react';
import Button from './Button';

const Welcome = ({ onClick }) => {
    return <div className='welcome'>
        <h1>Welcome to the Dinner Decider</h1>
        <h3>Having a hard time deciding where to eat? I'm here to help!</h3>
        <p>
            After sharing your location, you and then a friend will be presented with several restaurant options near you. Give each one a thumbs up or thumbs down if you would be interested in eating there. Then I'll compare your results and give you a match!
        </p>
        <Button text='Share Location' onClick={onClick} />
    </div>;
};

export default Welcome;
