import {useState} from 'react'
import './css/App.scss';
import NavBar from './components/NavBar';
import Toasts from './components/Toasts';
import SolarSystem from './components/SolarSystem';

function App() {
  const [theme, setTheme] = useState("theme--dark");
  const onThemeChange = (light) => {
    if(light) setTheme("theme--light")
    else setTheme("theme--dark")

  }

  return (
    <div className={`App ${theme}`}>
      <NavBar onThemeChange={onThemeChange} />
      <Toasts />
      <SolarSystem />
    </div>
  );
}

export default App;
