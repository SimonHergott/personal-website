import React from "react";
import "./object_found.css";

const IMAGE_URL = "/found_objects/parapluie.jpg";

const CONTACT_DATA = [
  {
    lang: "en",
    header: "If you found this umbrella, please contact Simon Hergott",
    email: "hergottsimon + @ + gmail.com",
    phone: "+33 6 52 05 09 twenty-one",
  },
  {
    lang: "fr",
    header: "Si vous avez trouvé ce parapluie, merci de contacter Simon Hergott",
    email: "hergottsimon + @ + gmail.com",
    phone: "+33 6 52 05 09 vingt-et-un",
  },
  {
    lang: "jp",
    header: "この傘を見つけた方は、シモン・ヘルゴットまでご連絡ください",
    email: "hergottsimon + @ + gmail.com",
    phone: "+33 6 52 05 09 にじゅういち",
    line: "line.me/ti/p/CEde6GXJQ2",
  },
];

export default function ParapluieFound() {
  return (
    <div className="kindle-found-container">
      <div className="kindle-found-content">
        <div className="kindle-back-row">
          <button className="back-button" onClick={() => window.location.href = '/'}>← Back</button>
        </div>
        <div className="image-wrapper">
          <img src={IMAGE_URL} alt="Found umbrella" className="kindle-found-image" />
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
                {item.line && (
                  <p>
                    <span className="label">Line:</span> {item.line}
                  </p>
                )}
              </div>
              {i < CONTACT_DATA.length - 1 && <hr className="kindle-divider" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}