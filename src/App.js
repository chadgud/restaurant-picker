
import Welcome from './components/Welcome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const callBackend = (environment, reqConfig) => {
    let backEndURL;

    if (environment === 'production') {
      backEndURL = 'https://dinner-decider-app.herokuapp.com';
    } else {
      backEndURL = 'http://localhost:3001';
    }

    axios.get(backEndURL, reqConfig)
      .then((res) => {
        navigate('/decide', {
          state: {
            results: res.data.results
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getLocation = () => {
    setIsLoading(true);
    let lat;
    let lon;
    window.navigator.geolocation.getCurrentPosition((pos) => {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;

      const reqConfig = {
        method: 'get',
        params: {
          lat: lat,
          lon: lon
        }
      };
      callBackend(process.env.NODE_ENV, reqConfig);
    }, (err) => console.log(err));
  }

  const submitAddress = (address) => {
    setIsLoading(true);
    const reqConfig = {
      method: 'get',
      params: {
        location: address
      }
    };
    callBackend(process.env.NODE_ENV, reqConfig);
  }

  return (
    <div className="App text-center h-100">
      <Welcome isLoading={isLoading} onClick={getLocation} onSubmitLoc={submitAddress} />
    </div>
  );

}

export default App;
