import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
// import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Carousel /> */}
      <SearchBar/>
      <Footer />
    </div>
  );
}

export default App;
