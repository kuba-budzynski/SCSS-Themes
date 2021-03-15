import React, { useState } from 'react';
import '../css/SolarSystem.scss'
import { planets } from '../constant/planets'

const Modal = ({planet, onClose}) => {
    return (
        <div className="backdrop" onClick={onClose}>   
            <section className="modal" onClick={e => e.stopPropagation()}>                        
                <h2>{planet.name}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <img src={planet.src} alt={planet.name}/>
                <button className="closeButton" onClick={onClose}>Zamknij</button> 
            </section>
        </div>
    );
}
const SolarSystem = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return (
        <>
        <section className="planets">
            <h2>Układ słoneczny</h2>
            <ul className="planets-list">
                {planets.map((planet) => 
                    <li key={planet.name} onClick={() => setSelectedPlanet(planet)}>
                        <div><img src={planet.src} alt={planet.name}/></div>
                        <p>{planet.name}</p>
                    </li>
                )}
            </ul>
        </section>
        {selectedPlanet && <Modal planet={selectedPlanet} onClose={() => setSelectedPlanet(null)}/>}
        </>
    );
}

export default SolarSystem;
