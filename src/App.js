import './styles/App.css';
import Navbar from './Navbar';
import NavbarFoot from './NavbarFoot';
import SectionHome from './SectionHome';
import SectionDesc from './SectionDesc';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar/>
      <SectionHome/>
      <SectionDesc/>
      <Footer/>
      <NavbarFoot/>
    </>
  );
}

export default App;
