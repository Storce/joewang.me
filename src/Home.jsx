import React from 'react';
import myImage from './assets/me.jpg'; // Import the image

function Home() {
    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h1>Joe Wang</h1>
            <h2>My real name is Zezhou, I also go by my username "storce"</h2>
            <div style={{ padding: '1rem' }}>
                <img src={myImage} alt="Joe Wang" style={{ width: '300px', height: 'auto' }} /> {/* Made the image smaller */}
            </div>
        </div>
    );
}

export default Home;