import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {Nav} from "./component/Nav"
import {Hem} from './pages/Hem';
import {SEO} from './pages/SEO';
import {OmSeoLisa} from './pages/OmSeoLisa';
import {BokaSEO} from "./component/Cta"
import {Footer} from "./component/Footer"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <Nav/>
    <BokaSEO/>
    {children}
<Footer/>
  </>
);
export const App = () => {
return (
  <>

   <Router>
    <Layout>
    <Routes>
     <Route path="/" element={<Hem />} />
     <Route path="/SEO" element={<SEO />} />
     <Route path="/omSeoLisa" element={<OmSeoLisa />} />
   </Routes>
  
    </Layout>
    </Router>
   
  </>
)
}