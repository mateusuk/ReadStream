import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar/>
      <Cards/>
    </div>
  );
}

export default App;
