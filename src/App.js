import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Project from './components/Project'

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
