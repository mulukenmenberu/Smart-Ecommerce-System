import './style/main.css'
import './style/mobile.css'
import './style/mid-screen.css'
import TopBar from './pages/TopBar';
import Footer from './pages/Footer';
import MainBody from './pages/MainBody';
import TopNavBar from './pages/TopNavBar';
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
          <MainBody/>
      </div>

      <div className='footer'>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
