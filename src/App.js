import './App.css';
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Projects from './Projects/Projects';
import Aboutus from './Aboutus/Aboutus';
import Contactus from './ContactUs/Contactus';
import Services from './Services/Services';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    
    <>
    {/* <Router> */}
    <div className="App">
      <Navbar />
      <Carousel/>
      <Aboutus/>
      <Projects/>
      <Services/>
      <Contactus/>
      
    </div>
    </>
  );
}

export default App;
