import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const data = require('../foursquaresampleresponse.json');


const Decide = () => {
    const navigate = useNavigate();
    const [placeIndex, setPlaceIndex] = useState(0);
    const [person, setPerson] = useState('person1');
    const [person1Data, setPerson1Data] = useState([]);
    const [person2Data, setPerson2Data] = useState([]);
    const [matchingData, setMatchingData] = useState([]);

    useEffect(() => {
        console.log(person1Data);
        console.log(person2Data);

        if (person1Data.length > 24 && person2Data.length > 24) {
            navigate('/result', {
                state: {
                    person1Data: person1Data,
                    person2Data: person2Data
                }
            });
        }
    });

    let restaurant = data.results[placeIndex];

    const handleThumbsUp = () => {
        if (person === 'person1') {
            setPerson1Data((person1Data) => [...person1Data, 1]);
        } else {
            setPerson2Data((person2Data) => [...person2Data, 1]);
        }

        if (person1Data.length > 24) {
            setPerson('person2');
            setPlaceIndex(0);
        }
        if (placeIndex < 24) {
            setPlaceIndex((placeIndex) => placeIndex + 1);
        }
    }

    const handleThumbsDown = () => {
        if (person === 'person1') {
            setPerson1Data((person1Data) => [...person1Data, 0]);
        } else {
            setPerson2Data((person2Data) => [...person2Data, 0]);
        }

        if (person1Data.length > 24) {
            setPerson('person2');
            setPlaceIndex(0);
        }
        if (placeIndex < 24) {
            setPlaceIndex((placeIndex) => placeIndex + 1);
        }
    }

    return <div>
        <h1>{restaurant.name}</h1>
        <img src={restaurant.photos[0].prefix + '400x400' + restaurant.photos[0].suffix} alt="" />
        <p>Rating: {restaurant.rating}/10</p>
        <p>Price: </p>
        <p>Distance: {(restaurant.distance / 1609).toFixed(1)} miles</p>
        <p>Category: {restaurant.categories[0].name}</p>
        <p>Location: {restaurant.location.address + ' ' + restaurant.location.locality + ',' + ' ' + restaurant.location.region}</p>
        <p>Phone: {data.results[placeIndex].tel}</p>
        <p>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
        <p>Open Now: {restaurant.hours.open_now ? 'Yes' : 'No'}</p>
        <button onClick={handleThumbsDown}>&#128078;</button>
        <button onClick={handleThumbsUp}>&#128077;</button>
    </div>;
};

export default Decide;
