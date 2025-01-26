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
import MainCarrers from './Components/Careers/MainCarrers';
import CareerDetailPage from './Components/Careers/CareerDetailPage';
import ApplyForm from './Components/Careers/ApplyForm';
import OurTeam from './Components/OurTeam';
import P404 from './Components/css/P404';
import Faq from './Components/Faq';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact-Us' element={<Contactus />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/careers' element={<MainCarrers />}></Route>
        <Route path="/course/:courseUrl" element={<CareerDetailPage />} />
        <Route path="/apply/:courseUrl" element={<ApplyForm />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/404" element={<P404 />} />
        <Route path="/faq" element={<Faq />} />



      </Routes>
    </>
  );
}
AOS.init({
  startEvent: 'DOMContentLoaded',
});
export default App;
