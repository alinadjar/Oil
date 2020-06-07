import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <h3 style={{ fontFamily: 'IRANSans' }}>عنوان تبرک </h3>
        <div style={{width: '100%'}}><iframe width="100%" height="600" src={"https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Title88)&ie=UTF8&t=&z=17&iwloc=B&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/measure-map-radius/">Measure circle on map</a></iframe></div><br />
      </header>
    </div>
  );
}

export default App;
