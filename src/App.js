import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
       <NavBar />
       <Home />
       <About />
       <SocialLinks />
    </div>
  );
}

export default App;
