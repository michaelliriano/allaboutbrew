import React from 'react';

const Home = () => {
  return (
    <div className="main-content">
      <div className="home-screen">
        <div className="home-screen-text ">
          <h1>It's all about the brew.</h1>
          <p>For the beer connoisseur.</p>
        </div>
        <div className="beer-emoji ">
          <span aria-label="beer emoji" role="img">
            🍻
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
