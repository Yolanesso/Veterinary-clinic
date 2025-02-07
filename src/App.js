import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import shtmanOlibg from './img/shtman-oil-bg.jpg';

function App() {
  return (
    <div className="wrapper clear">
      <Header />
      <main>
        <AboutSection />
        <div className="card-advertising mt-150 d-flex">
          <div className="shtman-oil"></div>
          <div className="discount"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
