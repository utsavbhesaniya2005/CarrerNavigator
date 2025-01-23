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

function App() {
  return (
    <>
      {/* <Header /> */}
      <Home></Home>
      {/* <Contactus></Contactus> */}
      {/* <Services></Services> */}
      {/* <Pricing></Pricing> */}
    </>
  );
}
AOS.init({
  startEvent: 'DOMContentLoaded',
});
export default App;
