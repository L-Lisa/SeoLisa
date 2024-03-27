import "./Cta.css"
import { Link } from 'react-router-dom'; 

export const BokaSEO = () => {
    return (
      <Link to="/omSeoLisa">
        <button className="boka-seo button-back">BOKA GRATIS STRATEGIMÖTE!</button>
      </Link>
    );
  };