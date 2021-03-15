import React, {useState} from 'react';
import '../css/NavBar.scss'
import earth from '../images/earth.svg'
import sun from '../images/sun.svg';

const NavBar = ({onThemeChange}) => {

    const [toggle, setToggle] = useState(true);
    const [logo, setLogo] = useState(earth)

    return (
        <nav>
            <section>
                <div className="logotype">
                    <img src={logo} alt="website logo"></img>
                    <h1>Strona o planetach</h1>
                </div>
                <div className="toggle">
                    <input type="checkbox" id="1" onChange={e => {
                        setToggle(val => !val)
                        onThemeChange(toggle)
                        if(toggle) setLogo(sun)
                        else setLogo(earth)
                    }}/>
                    <label for="1">
                        <span></span>
                    </label>
                </div>
            </section>
        </nav>
    );
}

export default NavBar;
