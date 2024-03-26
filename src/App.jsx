import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Nav} from "./component/Nav"
import { useState } from "react";
import {Hem} from './pages/Hem';
import {SEO} from './pages/SEO';
import {OmSeoLisa} from './pages/OmSeoLisa';


export const App = () => {
return (
  <>
    <Nav/>
   <Router>
      <Routes>
        <Route path="/" element={<Hem />} />
        <Route path="/SEO" element={<SEO />} />
        <Route path="/omSeoLisa" element={<OmSeoLisa />} />
      </Routes>
    </Router>
  
  </>
)
}