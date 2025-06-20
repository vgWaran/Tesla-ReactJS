import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";
import Navbar from './components/Navbar';
import HorizontalCarousel from "./components/HorizontalCarousel";
import Carousel1 from "./components/Carousel1";
import Teslacard from './components/Teslacard';
import Teslamap from "./components/Teslamap"
import FooterDetails from "./components/FooterDetails";
import Carousel2 from './components/Carousel2';
import Findyourcharge from './components/Findyourcharge';
import Stickyfooter from './components/Stickyfooter';

function App() {
  return (
    <div className="App">
      {/* Header Start */}
        <Navbar/>
      {/* Header End */}
      {/* main Start */}
        <HorizontalCarousel/>
        <Carousel1/>
        <Teslacard/>
        <Teslamap/>
      {/* main End */}
      {/* Footer Start */}
        <Findyourcharge/>
        <Carousel2/>
        <FooterDetails/>
        <Stickyfooter/>
      {/* Footer End */}
    </div>
  );
}

export default App;
