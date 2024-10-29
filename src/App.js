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
      
      {/* <link to="">Navbar</link>
      <link to="/projects">Projects</link>
      <link to="/services">Services</link>
      <link to="/contact">ContactUs</link>
    
        <Routes>
          <Route path='' element={<Navbar/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact'element={<Contactus/>}></Route>
        </Routes>
      
    </Router> */}
    </div>
    </>
  );
}

export default App;
