import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";

const whatsappStyle = {
  position: "fixed",
  height: "75px",
  width: "75px",
  borderColor: "#b9b4ae",
  backgroundColor: "#d5cec7",
  borderWidth: "10px",
  left: "1rem",
  bottom: "3rem",
  zIndex: "50",
  borderRadius: "9999px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const WhatsappButton = () => {
  const data = useStaticQuery(graphql`
    query {
      globalJson {
        contact {
          phone {
            whatsAppLink
          }
        }
      }
    }
  `);
  return (
    <a
      href={data.globalJson.contact.phone.whatsAppLink}
      target="_blank"
      style={whatsappStyle}
      aria-label="Contáctanos en Whatsapp"
    >
      <FontAwesomeIcon style={{ color: "black" }} size="2x" icon={faWhatsapp} />
    </a>
  );
};

export default WhatsappButton;
