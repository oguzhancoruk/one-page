import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DesignSwitcher from './components/DesignSwitcher';
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
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import './styles/globals.css';

function AppContent() {
  const [currentDesign, setCurrentDesign] = useState(1);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header />
      {isHomePage && (
        <DesignSwitcher 
          currentDesign={currentDesign}
          onDesignChange={setCurrentDesign}
        />
      )}
      <main>
        <Routes>
          <Route path="/" element={renderHomePage()} />
          <Route path="/hakkimda" element={<About />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sss" element={<FAQ />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/randevu" element={<Appointment />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
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
