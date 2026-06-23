import React from "react";
import "./object_found.css";

const IMAGE_URL = "/found_objects/ecouteurs.png";

const CONTACT_DATA = [
  {
    lang: "en",
    header: "If you found these earbuds, please contact Simon Hergott",
    email: "hergottsimon + @ + gmail.com",
    phone: "+33 6 52 05 09 twenty-one",
  },
  {
    lang: "fr",
    header: "Si vous avez trouvé ces écouteurs, merci de contacter Simon Hergott",
    email: "hergottsimon + @ + gmail.com",
    phone: "+33 6 52 05 09 vingt-et-un",
  },
];

export default function EcouteursFound() {
  return (
    <div className="kindle-found-container">
      <div className="kindle-found-content">
        <div className="kindle-back-row">
          <button className="back-button" onClick={() => window.location.href = '/'}>← Back</button>
        </div>
        <div className="image-wrapper">
          <img src={IMAGE_URL} alt="Found earbuds" className="kindle-found-image" />
        </div>
        
        <div className="kindle-found-text">
          {CONTACT_DATA.map((item, i) => (
            <div className={`kindle-language-block ${item.lang}`} key={i}>
              <h5 className="kindle-header">{item.header}</h5>
              <div className="kindle-details">
                <p>
                  <span className="label">Email:</span> {item.email}
                </p>
                <p>
                  <span className="label">Phone:</span> {item.phone}
                </p>
              </div>
              {i === 0 && <hr className="kindle-divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}