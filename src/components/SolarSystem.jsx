import React from 'react';
import '../css/SolarSystem.scss'
import { planets } from '../constant/planets'

const SolarSystem = () => {
    return (
        <section className="planets">
            <h2>Układ słoneczny</h2>
            <ul>
                {planets.map((planet) => 
                    <li key={planet.name}>
                        <img src={planet.src} alt={planet.name}/>
                        <span>{planet.name}</span>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default SolarSystem;
