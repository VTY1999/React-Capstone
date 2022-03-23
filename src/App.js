import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/countries/countries';
import Details from './components/Info/info';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:continent" element={<Countries />} />
        <Route path="/:continent/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
