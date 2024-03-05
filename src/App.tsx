import './App.css';
import Header from './components/header';
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
    </>
  );
}

export default App;
