import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const { state } = useLocation();
    return <div>
        <h1>Results</h1>
        <p>{state.person1Data}</p>
        <p>{state.person2Data}</p>
    </div>;
};

export default Result;
