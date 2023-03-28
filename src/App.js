import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Bestsellers from './components/Bestsellers/Bestsellers';
import FavoritePage from './components/FavoritePage/FavoritePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar/>} />
          <Route path="/bestsellers" element={<Bestsellers/>} />
          <Route path="/favorites" element={<FavoritePage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
