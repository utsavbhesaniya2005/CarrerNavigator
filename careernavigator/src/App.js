import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Components/Contactus';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Components/assets/css/all.min.css';
import './Components/assets/css/bootstrap.min.css';
import './Components/assets/css/style.css';
import './App.css';

function App() {
  return (
    <>
      <Home></Home>
      {/* <Contactus></Contactus> */}
    </>
  );
}
AOS.init({
  startEvent: 'DOMContentLoaded',
});
export default App;
