import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HomeDesign2 from './pages/HomeDesign2';
import HomeDesign3 from './pages/HomeDesign3';
import HomeDesign4 from './pages/HomeDesign4';
import HomeDesign5 from './pages/HomeDesign5';
import HomeDesign6 from './pages/HomeDesign6';
import HomeDesign7 from './pages/HomeDesign7';
import HomeDesign8 from './pages/HomeDesign8';
import HomeDesign9 from './pages/HomeDesign9';
import HomeDesign10 from './pages/HomeDesign10';
import HomeDesignHybrid from './pages/HomeDesignHybrid';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { apiService } from './services/apiService';
import './styles/globals.css';

function AppContent() {
  const [currentDesign, setCurrentDesign] = useState(11);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const settings = await apiService.getPublicSettings();
        if (settings.activeHomeDesign) {
          setCurrentDesign(settings.activeHomeDesign);
        }
      } catch {
        setCurrentDesign(11);
      }
    };

    loadSettings();
  }, []);

  const renderHomePage = () => {
    switch (currentDesign) {
      case 1:
        return <Home />;
      case 2:
        return <HomeDesign2 />;
      case 3:
        return <HomeDesign3 />;
      case 4:
        return <HomeDesign4 />;
      case 5:
        return <HomeDesign5 />;
      case 6:
        return <HomeDesign6 />;
      case 7:
        return <HomeDesign7 />;
      case 8:
        return <HomeDesign8 />;
      case 9:
        return <HomeDesign9 />;
      case 10:
        return <HomeDesign10 />;
      case 11:
        return <HomeDesignHybrid />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={renderHomePage()} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/sss" element={<FAQ />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/gizlilik" element={<PrivacyPolicy />} />
          <Route path="/kullanim" element={<TermsOfUse />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
