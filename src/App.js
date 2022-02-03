import './App.css';
import Welcome from './components/Welcome';

function App() {
  let userLocation;
  const getLocation = () => {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      userLocation = pos;
    }, (err) => {
      console.log(err);
    })
  };
  return (
    <div className="App">
      <Welcome onClick={getLocation} />
    </div>
  );
}

export default App;
