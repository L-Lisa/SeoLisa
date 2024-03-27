/* eslint-disable react/prop-types */
import "./SeoText.css"

export const Text = ({ h1,h2, h3, strong1, strong2, strong3, strong4, p1, p2, p3, p4,seoImage, title , px}) => {
    return (
      <>
        <div className="seo-text-section">
          {seoImage && 
          <>
            <div className="image-back">
            <img className="seo-section-img" src={seoImage} alt={title}  />
            </div>
          </>
          }
         
          <div className="text-seo">
            {px && <p>{px}</p>}
            {h1 && <h1>{h1}</h1>}
            {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          {strong1 && <strong>{strong1}</strong>}<p>{p1}</p>
          {strong2 && <strong>{strong2}</strong>}<p>{p2}</p>
         {strong3 && <strong>{strong3}
          </strong>} <p>{p3}</p>
          
          {strong4 && <strong>{strong4}
          </strong>}<p>{p4}</p>
          </div>
         
        </div>
      </>
    );
  };