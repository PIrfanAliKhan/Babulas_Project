import './App.css';
import Navbar from './Navbar/Navbar';
import Carousel from './Carousel/Carousel';
import Projects from './Projects/Projects';
import Aboutus from './Aboutus/Aboutus';
import Contactus from './ContactUs/Contactus';
import Services from './Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Aboutus/>
      <Carousel/>
      <Projects/>
      <Services/>
      <Contactus/>
    </div>
  );
}

export default App;
