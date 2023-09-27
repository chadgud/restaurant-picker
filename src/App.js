
import Welcome from './components/Welcome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

      axios.get('https://dinnerdecider.onrender.com', reqConfig)
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
    }, (err) => console.log(err));

  }

  return (
    <div className="App text-center h-100">
      <Welcome isLoading={isLoading} onClick={getLocation} />
    </div>
  );

}

export default App;
