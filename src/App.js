import './style/main.css'
import './style/mobile.css'
import './style/mid-screen.css'
import TopBar from './pages/TopBar';
import Footer from './pages/Footer';
import MainBody from './pages/MainBody';
import TopNavBar from './pages/TopNavBar';
import Products from './pages/Products';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="main">
      <div className='header'>
          <TopBar/>
      </div>
      <div className='nav-bar'>
          <TopNavBar/>
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={ <MainBody/>}/>
          <Route path ="/today-deals/:id" element={<Products/>}/>
           <Route path ="/gift-cards/:id"  element={<Products/>}/>
           <Route path ="/electronics/:id"  element={<Products/>}/>
           <Route path ="/house-appeliances/:id"  element={<Products/>}/>
           <Route path ="/gaming/:id" element={<Products/>}/>
           <Route path ="/sports/:id"  element={<Products/>}/>
           <Route path ="/shoe-and-cloth/:id"  element={<Products/>}/>
           <Route path ="/kids/:id"  element={<Products/>}/>
            
        </Routes>
         
      </div>

      <div className='footer'>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
