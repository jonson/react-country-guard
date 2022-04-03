import React from 'react';
import './App.css';
import { useCountry } from './CountryContext';


function USA() {
  return (
    <p>Hello you are browsing form the USA</p>
  );
}

function RestOfTheWorld() {
  return (
    <p>Sorry, this content is only available in the USA</p>
  );
}


function App() {
  const { country } = useCountry();
  return (
    <div className="App">
      <header className="App-header">
        { country === "US" ? (
            <USA />
        ) : country ? (
            <RestOfTheWorld />
        ) : (
           <p>Loading country...</p>
        )}
      </header>
    </div>
  );
}

export default App;
