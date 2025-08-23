import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Index from '@/pages/Index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 pb-12 min-h-screen flex flex-col"> {/* Padding to account for header/footer */}
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
