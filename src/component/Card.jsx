import './Card.css';


export const Card = ({ seoCardImage, h3, strong3, p3, h4, strong4, p4, title, }) => {
  return (
   <>
   <div>
     {seoCardImage && 
     <>
       <div>
    <img className="seo-card-img" src={seoCardImage} alt={title}/>
     </div>
     </>
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
   </>
  );
};