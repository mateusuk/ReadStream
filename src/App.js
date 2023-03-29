import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AnomatedRoutes from './components/AnomatedRoutes';

function App() {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AnomatedRoutes/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
