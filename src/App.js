import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cocktails from './pages/Cocktails';
import CocktailDetail from './pages/CocktailDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} /> 
        <Route path="/cocktails/detail/:id" element={<CocktailDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
