import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Result = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    state.restaurants.map((element, index) => {
        if (state.person1Data[index] === 1 && state.person2Data[index] === 1) {
            element.match = true;
        } else {
            element.match = false;
        }
    });

    const matches = state.restaurants.filter((element) => element.match === true);

    //Fisher-Yates shuffle
    const randomizeArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const randomizedMatches = randomizeArray(matches);

    const [matchIndex, setMatchIndex] = useState(0);
    const restaurant = randomizedMatches[matchIndex];

    const photosCarousel = (photos) => {
        if (photos.length) {
            const carousel = photos.map((photo, index) => {
                return (
                    <div key={photo.suffix} className={'carousel-item' + (index === 0 ? ' active' : '')}>
                        <img src={photo.prefix + '400x300' + photo.suffix} className="d-block w-100 card-img-top" alt="..." />
                    </div>
                )
            })
            return carousel;
        } else {
            return (
                <div className='carousel-item active'>
                    <img className="card-img-top img-fluid" src="./tim-mossholder-FH3nWjvia-U-unsplash.jpg" />
                </div>
            )
        }
    }

    const tryAgain = () => {
        navigate('/');
    }

    const isMatch = () => {
        if (restaurant) {
            return (
                <div className='row h-100 d-flex flex-column justify-content-center'>
                    <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                        <div className="card">
                            <div className="card-header text-center text-white h4 bg-success">Here's Your Match!</div>
                            <div id="photoCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {photosCarousel(restaurant.photos)}
                                </div>
                                <button hidden={restaurant.photos.length <= 1} className="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button hidden={restaurant.photos.length <= 1} className="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-title'>{restaurant.name}</h2>
                                <p className='my-0'>Location: <a href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(restaurant.location.address).replace(/%20/i, '+') + '+' + encodeURIComponent(restaurant.location.locality).replace(/%20/i, '+') + '%2C' + '+' + encodeURIComponent(restaurant.location.region).replace(/%20/i, '+')}>{restaurant.location.address + ' ' + restaurant.location.locality + ',' + ' ' + restaurant.location.region}</a></p>
                                <p className='my-0'>Distance: {(restaurant.distance / 1609).toFixed(1)} miles</p>
                                <p className='my-0'>Phone: <a href={'tel:' + restaurant.tel}>{restaurant.tel}</a></p>
                                <p className='my-0'>Website: <a href={restaurant.website}>{restaurant.website}</a></p>
                                <p className='my-0'>Rating: {restaurant.rating}{restaurant.rating ? '/10' : 'No Rating Available'}</p>
                                <p className='my-0'>Price: <strong>{'$'.repeat(restaurant.price)}</strong><strong className='text-body text-opacity-25'>{'$'.repeat(4 - restaurant.price)}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="switch h-100 d-flex flex-column justify-content-center text-center text-white">
                    <h1 className='mb-3'>No Matches Found</h1>
                    <Button text='Try Again' onClick={tryAgain} />
                </div>
            )
        }

    }

    return isMatch();

};

export default Result;
