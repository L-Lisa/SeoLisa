import './Card.css';


// eslint-disable-next-line react/prop-types
export const Card = ({ link, seoCardImage, h3, strong3, p3, h4, strong4, p4, title, }) => {
  return (
    <a href={link} className="card-link">
   <div className="seo-card">
     {seoCardImage && 
       <div>
    <img className="seo-card-img" src={seoCardImage} alt={title}/>
     </div>
     }
 <div>
 {h3 && <h3>{h3}</h3>}
 {strong3 && <strong>{strong3}</strong>}
 { p3 && <p>{p3}</p> }
 {h4 && <h4>{h4}</h4>}
 {strong4 && <strong>{strong4}</strong>}
 { p4 && <p>{p4}</p> }
 </div>
 </div>
 </a>

  );
};