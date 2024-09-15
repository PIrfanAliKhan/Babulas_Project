import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Projects from './Projects/Projects';
import Aboutus from './Aboutus/Aboutus';
import Contactus from './ContactUs/Contactus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutus/>
      <Carousel/>
      <Projects/>
      <Contactus/>
    </div>
  );
}

export default App;
