import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Nav} from "./components/Nav/Nav"
import { useState } from "react";
import {Hem} from './pages/Hem';
import {SEO} from './pages/SEO';
import {Kontakt} from './pages/kontakt';


export const App = () => {
return (
  <>
    <Nav/>
   <Router>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/SEO" element={<SEO />} />
        <Route path="/Kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  
  </>
)
}