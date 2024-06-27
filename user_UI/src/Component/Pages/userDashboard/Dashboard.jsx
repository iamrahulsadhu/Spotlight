import React from 'react';
import backgroundImage from '../../../assets/back.png'; // Update with the correct path to your background image
import gifImage from '../../../assets/giphy.gif'; // Update with the correct path to your GIF

function Dashboard() {
  const backgroundStyle = {
    backgroundImage: `url(${gifImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    
  };

  return (
    <div style={backgroundStyle}>
      {/* <img src={gifImage} alt="Loading..." style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> */}
      <h2 style={{fontSize:35,color:'#fff'}}>Explore your Events...</h2>
    </div>
  );
}

export default Dashboard;
