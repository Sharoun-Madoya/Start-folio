import logo from './logo.svg';
import './App.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
import Home from './components/sections/home';
import About from './components/sections/about';
import Contact from './components/sections/contact';
import NavBar from './components/views/navBar';
import Footer from './components/views/footer';

function App() {
  return (
    <Router>  
      <div className="App">  
        <Routes>  
          {/* <Route exact path='/' element={< Home />}></Route>   
          <Route path='/about' element={< About />}></Route>   */}
          <Route path='/contact' element={< Contact />}></Route> 
        </Routes> 
        {/* <NavBar/>
        <Footer/> */}
      </div> 
    </Router>
  );
}

export default App;
