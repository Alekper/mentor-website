import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Contact from './Components/Contact/Contact';
import Methods from './Components/Methods/Methods';
import Review from './Components/Review/Review';
import React, {useState} from 'react';



function App() {

  const [menuStatus, setMenuStatus] = useState(false)


  return (
    <div className="App">
<div className="header-div">
<header>LEILA <br /> MENTOR</header>
<button onClick={()=>setMenuStatus(!menuStatus)} id='hamburger'><i className="fa-solid fa-bars"></i></button>
</div>
      <nav>
        <Link to='/' className='page'>Home</Link>
        <Link to='/about' className='page'>About</Link>
        <Link to='/methods' className='page'>Methods</Link>
        <Link to='/contact' className='page'>Contact</Link>
        <Link to='/review' className='page'>Review</Link>
      </nav>
      <div className='nav' style={{display: menuStatus ? 'flex' : 'none'}}>
        <Link to='/' className='page'>Home</Link>
        <Link to='/about' className='page'>About</Link>
        <Link to='/methods' className='page'>Methods</Link>
        <Link to='/contact' className='page'>Contact</Link>
        <Link to='/review' className='page'>Review</Link>
      </div>
      {/* <Home></Home> */}
      <div className='content-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/review' element={<Review />} />
            <Route path='/methods' element={<Methods />} />
            <Route path="*" element={<Navigate to='/' />} />

          </Routes>
        </div>
      <div className="footer">
        <div className='location'>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <a href="https://goo.gl/maps/kCLqPUP5seFficGe6" className='footer-page'>Nərimanov rayonu, Təbriz küçəsi 85D</a>
          </div>
          <div>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/leila.mentor/" className='footer-page'>@leila.mentor</a>
          </div>
        </div>
        
        <nav className='footer-nav'>
        <Link to='/' className='footer-page'>Home</Link>
        <Link to='/about' className='footer-page'>About</Link>
        <Link to='/methods' className='footer-page'>Methods</Link>
        <Link to='/contact' className='footer-page'>Contact</Link>
        <Link to='/review' className='footer-page'>Review</Link>
      </nav>
      
      </div>
    </div>
  );
}

export default App;
