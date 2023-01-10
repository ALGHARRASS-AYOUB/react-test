import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import { Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
      <div>
        <NavBar/>
      </div>
        <Hero/>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/About" element={<About/>}  />
          <Route path="/Contact" element={<Contact/>} />
         
        </Routes>
      <h1>hello from the new Project</h1>
    </>

  );
}

export default App;
