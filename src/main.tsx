import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Simple components for minimal working example
const Header = () => (
  <header className="bg-gray-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">PriceScout</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">Products</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>© 2025 PriceScout. All rights reserved.</p>
    </div>
  </footer>
);

const HomePage = () => (
  <main className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4">Welcome to PriceScout</h2>
    <p className="mb-4">
      Your one-stop shop for comparing prices across multiple retailers.
    </p>
    <div className="bg-yellow-100 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Site Under Construction</h3>
      <p>
        We're currently building this site. Check back soon for a fully functional
        shopping experience!
      </p>
    </div>
  </main>
);

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);