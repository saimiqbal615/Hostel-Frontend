
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Homepage from './Pages/Homepage';
import MyNavbar from './MyComponent/Navbar/MyNavbar';
import Footer from './MyComponent/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './MyComponent/About/Aboutcmp'
import Rooms from './Pages/Rooms';
import Gallerys from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import Registration from './Pages/Registration';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <div>
    
    <BrowserRouter>
    <MyNavbar/>
    <Routes>
    
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path='/gallery' element={<Gallerys/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/Registration' element={<Registration/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    
    
    </Routes>

    </BrowserRouter>

     <br/>
    
   <Footer/>
    </div>

    
  );
}

export default App;
