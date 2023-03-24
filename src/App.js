import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar/>
      <Footer />
    </div>
  );
}

export default App;
