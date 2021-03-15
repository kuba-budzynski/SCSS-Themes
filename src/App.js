import {useState, useEffect} from 'react'
import './css/App.scss';
import NavBar from './components/NavBar';
import Toasts from './components/Toasts';
import SolarSystem from './components/SolarSystem';
import LandingPage from './components/LandingPage';
import Info from './components/Info'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState("theme--dark");
  const onThemeChange = (light) => {
    if(light) setTheme("theme--light")
    else setTheme("theme--dark")
    const body = document.querySelector("body");
    if(theme === "theme--dark"){
      body.classList.remove("scrollbar-dark")
      body.classList.add('scrollbar-light')
    }
    else{
      body.classList.remove("scrollbar-light")
      body.classList.add('scrollbar-dark')
    }
  }

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("scrollbar-light")
    body.classList.add('scrollbar-dark')
  }, [])

  return (
    <div className={`App ${theme}`}>
      <div className="AppContainer">
        <NavBar onThemeChange={onThemeChange} />
        <LandingPage />
        <SolarSystem />
        <Info/>
        <Toasts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
