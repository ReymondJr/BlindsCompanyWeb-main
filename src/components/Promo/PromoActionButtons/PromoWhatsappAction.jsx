import React from "react";
import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";

const PromoWhatsappAction = ({ keyword }) => {
  const { t } = useTranslation("translations", {
    keyPrefix: "promo-whatsapp-action",
  });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        companyLocationLink
        whatsAppLink
        officeNumber
      }
    }
  `);

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

  return (
    <Fragment>
      <MediaQuery query="(max-width: 995px)">
        <a
          href={`${data.promoJson.whatsAppLink}?text=¡Hola!%20Me%20Interesa%20el%20producto%20${keyword}`}
          target="_blank"
          style={whatsappStyle}
          aria-label="Contáctanos en Whatsapp"
        >
          <FontAwesomeIcon
            style={{ color: "black" }}
            size="2x"
            icon={faWhatsapp}
          />
        </a>
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
        <a
          href={`${data.promoJson.whatsAppLink}?text=¡Hola!%20Me%20Interesa%20el%20producto%20${keyword}`}
          target="_blank"
          style={whatsappStyle}
          aria-label={t("contact-us")}
        >
          <FontAwesomeIcon
            style={{ color: "black" }}
            size="2x"
            icon={faWhatsapp}
          />
        </a>
      </MediaQuery>
    </Fragment>
  );
};

export default PromoWhatsappAction;
