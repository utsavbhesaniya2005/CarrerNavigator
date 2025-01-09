import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './Components/Contactus';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Components/assets/css/all.min.css';
import './Components/assets/css/style.css';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Home></Home>
      {/* <Contactus></Contactus> */}
    </>
  );
}
// AOS.init({
//   startEvent: 'DOMContentLoaded',
// });
export default App;
