import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Components/Contactus';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Components/assets/css/style.css';
import './App.css';
import Header from './Components/css/Header/Header';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contactUs' element={<Contactus />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
      </Routes>
    </>
  );
}
AOS.init({
  startEvent: 'DOMContentLoaded',
});
export default App;
