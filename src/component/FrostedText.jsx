import "./FrostedText.css"

export const FrostedText = ({h1,h2, h3, strong1, strong2, strong3, strong4, p1, p2, p3, p4, title }) => {
    return (
      <>
        <div className="frosted-text-section">
        
          <div className="frosted-text">
            {h1 && <h1>{h1}</h1>}
            {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          {strong1 && <strong>{strong1}</strong>}<p>{p1}</p>
          {strong2 && <strong>{strong2}</strong>}<p>{p2}</p>
         {strong3 && <strong>{strong3}
          </strong>} <p>{p3}</p>
          {strong3 && <strong>{strong3}
          </strong>}<p>{p3}</p>
          {strong4 && <strong>{strong4}
          </strong>}<p>{p4}</p>
          </div>
         
        </div>
      </>
    );
  };