import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Sectionone from './pages/Sectionone';
import Sectionstar from './pages/Sectionstar';
import Worksection from './pages/Worksection';
import Vehiclesection from './Vehiclesection';
import Mensection from './Mensection';
import Phonesection from './Phonesection';
import Imagessection from './pages/Imagessection';
import Reviewsection from './Reviewsection';
import Startedsecteion from './pages/Startedsecteion';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sectionone/>
      <Imagessection/>
      <Sectionstar/>
      <Worksection/>
      <Vehiclesection/>
      <Mensection/>
      <Phonesection/>
      <Reviewsection/>
      <Startedsecteion/>
      <Footer/>
    </div>
  );
}

export default App;
