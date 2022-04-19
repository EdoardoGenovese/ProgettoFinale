import 'bootstrap/dist/js/bootstrap'

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar/Navbar';
import Posts from './components/posts/Posts'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Posts />}/>
      </Routes>
    </div>
  );
}

export default App;
