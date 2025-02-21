
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Comp/Nav';
import Footer from './Footer';
import Home from './Comp/Home';
import About from './Comp/About';
import Product from './Comp/Product';
import Contact from './Comp/Contact';




function App() {
 

  return (
 <>
  
  <BrowserRouter>

       <Nav/>

  <Routes>

      <Route path="*" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     

  </Routes>

       <Footer/>
  
  </BrowserRouter>


 </>
  )
   
}

export default App
