import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Vanessa from './pages/VanessaPage/vanessa';
import Marlene from './pages/MarlenePage/marlene';
import Quiz from './pages/quiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/vanessa' element={<Vanessa />} />
        <Route path='/marlene' element={<Marlene />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
