import React from 'react';
import '../styles/MainPage.css'

const MainPage = () => {
  return (
    <div className="main-container">
      <header className="header">
        <button className="signout-btn">Sign out</button>
        <div className="company-info">
          <h1>Company name</h1>
          <div className="loading-bar">
            <span>Loading bar</span>
            <span>400/500 capacity</span>
          </div>
        </div>
        <div className="user-info">
          <span>Current user:</span>
          <span>John Doe</span>
        </div>
      </header>
      <div className="content">
        <button className="nav-btn left-btn">←</button>
        <div className="table-container">
          {/* Table content goes here */}
        </div>
        <button className="nav-btn right-btn">→</button>
      </div>
      <footer className="footer">
        <button className="add-btn">add</button>
      </footer>
    </div>
  );
};

export default MainPage;