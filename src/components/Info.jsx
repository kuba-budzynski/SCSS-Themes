import React from 'react';
import rocket from '../images/rocket.svg'

const Info = () => {
    return (
        <div className="infoDiv">
            <div className="container reverse">
                <div className="fraction headings">
                    <h1>Let's reach the stars!</h1>
                    <h3>Hope on for and adventure of a lifetime</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="fraction">
                    <img src={rocket} alt="rocket image" className="heroImage2"></img>
                </div>
            </div>
        </div>
    );
}

export default Info;
