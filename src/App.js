import React from 'react';
import './App.css';
import Header from './views/header/header';
import Banner from './views/banner/banner';
import AboutUs from './views/aboutUs/aboutUs';
import CoreValues from './views/coreValues/CoreValues';
import Speciality from './views/speciality/Speciality';
import Footer from './views/footer/Footer';

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <Banner />
      <AboutUs />
      <CoreValues />
      <Speciality />
      <Footer />
    </div>
  );
}

export default App;
