import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h1>Hello! my name is Ethan Greenfield and this is my portfolio.</h1>
      <img 
        src="src/assets/design 6.JPG" 
        alt="portfolio design" 
        style={{
          width: '80%',
          maxWidth: '600px',
          height: 'auto',
          borderRadius: '8px',
          marginTop: '1rem'
        }} 
      />
    </div>
  );
};

export default Home;

