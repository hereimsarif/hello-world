import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Index from '@/pages/Index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
  
      <div className=" min-h-screen flex flex-col"> {/* Padding to account for header/footer */}
        <Routes>
        
          <Route path="/" element={<Index />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;
