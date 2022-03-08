import React from 'react';
import AddressForm from './AddressForm';
import Button from './Button';
import Loader from './Loader';

const Welcome = ({ isLoading, onClick, onSubmitLoc }) => {
    return <div className='welcome h-100 d-flex flex-column justify-content-center text-white'>
        <h1>Welcome to the Dinner Decider</h1>
        <h3>Having a hard time deciding where to eat? I'm here to help!</h3>
        <p>
            After sharing your location, you and then a friend will be presented with several restaurant options near you. Give each one a thumbs up or thumbs down if you would be interested in eating there. Then I'll compare your results and give you a match!
        </p>
        <Button isLoading={isLoading} text='Share Current Location' onClick={onClick} />
        <p className="my-3" hidden={isLoading}>or</p>
        <AddressForm isLoading={isLoading} onSubmitLoc={onSubmitLoc} />
        <Loader isLoading={isLoading} />
    </div>;
};

export default Welcome;
