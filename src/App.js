import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import FavoritePage from './components/FavoritePage/FavoritePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar/>} />
          <Route path="/favorites" element={<FavoritePage/>} />
          {/* <Route path="/bestsellers" element={<Bestsellers/>} /> */}
        </Routes>
        {/* <SearchBar/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
