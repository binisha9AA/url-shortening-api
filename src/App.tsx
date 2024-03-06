import './App.css';
import Footer from './components/footer/footer-main';
import Header from './components/header/desktop-header';
import HeroSection from './components/hero-section';
import Stats from './components/stats';

function App() {
  return (
    <>
      <div className="container pb-10">
        <Header />
        <HeroSection />
      </div>
      <Stats />
      <Footer />
    </>
  );
}

export default App;
