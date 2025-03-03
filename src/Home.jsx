import React, { useState } from 'react';
import myImage from './assets/me.jpg'; // Import the image
import buddyImage from './assets/react.svg'; // Import the buddy image
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

function Home() {
    const [notification, setNotification] = useState('');

    const copyEmailToClipboard_1 = () => {
        navigator.clipboard.writeText('joewangzz1028@gmail.com');
        setNotification('Email copied to clipboard!');
        setTimeout(() => setNotification(''), 1000); // Clear notification after 3 seconds
    };

    const copyEmailToClipboard_2 = () => {
        navigator.clipboard.writeText('zezhou_wang@berkeley.edu');
        setNotification('Email copied to clipboard!');
        setTimeout(() => setNotification(''), 1000); // Clear notification after 3 seconds
    };

    return (
        <div style={{ padding: '0rem', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}> {/* Make the text box less wide */}
            <h1 className="heading1" style={{ marginBottom: '0.5rem' }}>Hi! I'm Joe</h1> {/* Apply heading1 class */}
            <h2 className="italic-subtitle" style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                I also go by Zezhou, and my username Storce.
            </h2> {/* Apply italic-subtitle class */}
            <p className="paragraph" style={{ marginBottom: '0rem', textAlign: 'center' }}>
                I am a Computer Science undergrad at UC Berkeley.
            </p>
            <div style={{ padding: '1rem' }}>
                <img src={myImage} alt="Joe Wang" style={{ width: '300px', height: 'auto' }} /> {/* Made the image smaller */}
            </div>
            <div className="contact-box" style={{ marginTop: '-1rem' }}>
                <div style={{ textAlign: 'left' }}>
                    <p className="paragraph" style={{ marginBottom: '-0.5rem' }}>
                        <FaEnvelope /> Email: <span onClick={copyEmailToClipboard_1} style={{ textDecoration: 'underline', color: '#1e90ff', cursor: 'pointer' }}>joewangzz1028@gmail.com</span>
                    </p>
                    <p className="paragraph" style={{ marginBottom: '-0.5rem' }}>
                        <span onClick={copyEmailToClipboard_1} style={{ textDecoration: 'underline', color: '#1e90ff', cursor: 'pointer' }}>zezhou_wang@berkeley.edu</span>
                    </p>
                    <p className="paragraph" style={{ marginBottom: '-0.5rem' }}>
                        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/joseph-wang-zz/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#1e90ff' }}>Joe Wang</a>
                    </p>
                    <p className="paragraph" style={{ marginBottom: '0rem' }}>
                        <FaGithub /> GitHub: <a href="https://github.com/storce" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#1e90ff' }}>storce</a>
                    </p>
                </div>
                {notification && <div style={{ marginTop: '1rem', color: 'green' }}>{notification}</div>} {/* Subtle notification */}
            </div>
            <div className="buddy-box" style={{ marginTop: '-1rem' }}>
                <p className="paragraph" style={{ marginBottom: '0.5rem' }}>Buddy Box [in construction]</p> {/* Apply heading2 class */}
                {/* <a href="https://www.buddy-website.com" target="_blank" rel="noopener noreferrer">
                    <img src={buddyImage} alt="Buddy" />
                </a> */}
            </div>
        </div>
    );
}

export default Home;