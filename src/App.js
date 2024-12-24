import React, { useState } from 'react';
//import axios from 'axios';
import './App.css'; // Import the CSS file


import DynamicApiCall from './DynamicApiCall';

const App = () => {
 
    const [apiName, setApiName] = useState('');
  
    const handleApiChange = (e) => {
        setApiName(e.target.value);
      };

    return (
        <div className="container">
      <h1 className="title">Dynamic API Call</h1>
      <input
        className="input-box"
        type="text"
        placeholder="Enter API name (e.g., orders)"
        value={apiName}
        onChange={handleApiChange}
      />
      <div className="api-call-container">
        <DynamicApiCall apiName={apiName} />
      </div>
    </div>
    );
};

export default App;
