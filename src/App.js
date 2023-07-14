import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './layout/Header';
import SectionOne from './layout/Section1';
import Sectiontwo from './layout/Section2';
import Sectionthree from './layout/Section3';
import Sectionfour from './layout/Section4';
import Sectionfive from './layout/Section5';
import Sectionsix from './layout/Section6';
import Sectionseven from './layout/Section7';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour />
      <Sectionfive/>
      <Sectionsix/>
      <Sectionseven/>
      <Footer/>
    </div>
  );
}

export default App;
