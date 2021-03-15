import React from 'react';
import landing from '../images/landing.svg'
import '../css/Landing.scss'

const LandingPage = () => {
    return (
        <div className="landingDiv">
            <div className="container">
                <div className="fraction headings">
                    <h1>Explore space with us!</h1>
                    <h3>See intresting facts about outer space</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="fraction">
                    <img src={landing} alt="hero image" className="heroImage"></img>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
