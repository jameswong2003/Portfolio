import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

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
