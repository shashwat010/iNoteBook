import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotesState from './context/notes/NotesState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Alert/>
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About/>}/>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </Router>
      </NotesState>
    </>
  );
}

export default App;
