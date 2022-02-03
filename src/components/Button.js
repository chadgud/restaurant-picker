import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, onClick }) => {
    let navigate = useNavigate();
    return <div>
        <button onClick={() => {
            navigate('/decide');
            onClick();
        }}>
            {text}
        </button>
    </div>;
};

export default Button;
