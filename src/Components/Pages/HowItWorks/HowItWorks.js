import React from 'react'
import '../HowItWorks/HowItWorks.css';
import Background from '../../Images/augusta.jpeg';


export default function HowItWorks() {
    return (
        <div className="Container">
            <img
                src={Background}
                alt="BackgroundImg"
                style={{
                     position: 'fixed',
                     width: '100%',
                    left: '0%',
                    top: '0%',
                    height: '100%',
                    objectFit: 'cover',
                    // transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                }}
            />
        </div>
    )
}
