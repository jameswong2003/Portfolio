import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Josephine from './Pages/Josephine'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/josephine' element={<Josephine />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
