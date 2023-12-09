import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='layout'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
