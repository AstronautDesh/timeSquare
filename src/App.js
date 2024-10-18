import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavMenu from './Layout/navMenu';
import Logo from './Layout/logo';
import './App.css';

// Lazy load the pages
const HomePage = lazy(() => import('./Pages/HomePage'));
const ClassicPage = lazy(() => import('./Components/ClassicPage'));
const ModernPage = lazy(() => import('./Components/ModernPage'));
const HerWatch = lazy(() => import('./Components/HerWatch'));
const Straps = lazy(() => import('./Components/Straps'));
const CheckOutPage = lazy(() => import('./Pages/CheckOutPage'));
const Search = lazy(() => import('./Components/Search')); // Lazy load Search too

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />  {/* This is your navigation menu */}
        <Logo />  {/* Adding the logo component */}
        
        {/* Suspense will show fallback while lazy-loaded components load */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" />} />  {/* Redirect to /search */}
            <Route path="/home" element={<HomePage />} />  {/* Optionally use /home for HomePage */}
            <Route path="/classic" element={<ClassicPage />} />
            <Route path="/modern" element={<ModernPage />} />
            <Route path="/her-watch" element={<HerWatch />} />
             <Route path="/straps" element={<Straps />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/search" element={<Search />} />  {/* Route for search page */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
