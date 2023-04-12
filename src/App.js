import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Navigate, Route} from 'react-router-dom'
import NavBar from './components/NavBar/index'
import Footer from './components/Footer/index'
import Home from './pages/Home/Home';
//pages


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar />
        <div className='container'>
          <Routes>
             <Route path='/' element={<Home />} /> 
          </Routes>
        </div>
        <Footer />
       </BrowserRouter>
       
    </div>
  );
}

export default App;
