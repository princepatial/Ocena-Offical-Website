import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Service from './Pages/Servicess/Service'
import Contact from './Pages/Contact/Contact';

function App() {
  const location = useLocation();

  // Determine navbar color based on the current route
  const navbarColor =  location.pathname === '/service' ? 'service-navbar' :
  location.pathname === '/about' ? 'about-navbar' :
  'default-navbar'; // Default navbar color for other routes
  return (
<>
      <Navbar  className={navbarColor} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
    </>

 
  );
}

export default App;
