import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Movies from './components/Movies';
import Error from './components/Error';
import Play from './components/Play'; 
import About from './components/About';
import Terms from './components/terms'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Play/:type/:id" element={<Play />} />
          <Route path="/About" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;