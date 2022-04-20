import 'bootstrap/dist/js/bootstrap'

import logo from './logo.svg';
import './App.css';
import Navbar from './components/navabar/Navbar';
import {PostList} from './components/posts/Posts'
import { Route, Routes } from 'react-router-dom';
import ChiSiamo from './components/chi-siamo/ChiSiamo';
import Contatti from './components/contatti/Contatti';
import Footer from './components/footer/Footer';
import CategoryPosts from './components/category-posts/CategoryPosts';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<PostList />}/>
        <Route path='category/:id' element={<CategoryPosts />} />
        <Route path='/chi-siamo' element={<ChiSiamo />} />
        <Route path='/contatti' element={<Contatti />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
