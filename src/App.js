import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/contact';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Experience />
        <Project />
        <Contact />
    </>
  );
}

export default App;
