import { Card } from '@/components/ui/card';
import React from 'react';

const heroImg = 'https://asimexaistorage.blob.core.windows.net/asimexaicontainer/hero-1200x630.png';

const Index: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px-48px)] px-4 py-8 bg-gradient-to-b from-white to-slate-50"> {/* Account for header/footer heights */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <Card className="overflow-hidden max-w-[600px] w-full drop-shadow-lg">
          <img
            src={heroImg}
            alt="Modern abstract hero"
            className="object-cover w-full h-64 md:h-full md:max-h-[400px] bg-gray-100 rounded-t md:rounded-t-none md:rounded-l"
            width={600}
            height={400}
            loading="eager"
          />
        </Card>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-center md:text-left">
            Hello, World!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 text-center md:text-left">
            Welcome to our modern React + Vite + Tailwind starter. Elegant, responsive, and accessible by design.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
