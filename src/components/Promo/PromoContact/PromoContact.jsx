import React from "react";
import { Container } from "../SharedStyles";
import { Card, CreamButton, BlackButton } from "./PromoContactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const PromoContact = ({ product }) => {
  const { t } = useTranslation("translations", { keyPrefix: "promo-contact" });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        companyLocationLink
        whatsAppLink
        officeNumber
        whatsAppDisplayNumber
        officeDisplayNumber
      }
    }
  `);

  const containerStyle = {
    marginTop: "60px",
    marginBottom: "80px",
  };

  const centerTextStyle = {
    textAlign: "center",
    fontSize: "32px",
    marginTop: "70px",
    color: "#292b2c",
  };

  const flexRowStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "50px",
    marginTop: "30px",
  };

  const cardStyle = {
    width: "50%",
  };

  const cardHeadingStyle = {
    fontSize: "28px",
    marginBottom: "40px",
    color: "#292b2c",
  };

  const googleMapsLinkStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    alignItems: "center",
    marginTop: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    "&:hover": {
      color: "black",
    },
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${data.promoJson.officeNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(
      `${
        data.promoJson.whatsAppLink
      }?text=¡Hola!%20Me%20Interesa%20el%20producto%20${product.slug
        .split("-")
        .join(" ")
        .toUpperCase()}`,
      "_blank"
    );
  };

  const handleLocationClick = () => {
    window.open(data.promoJson.companyLocationLink, "_blank");
  };

  return (
    <Container style={containerStyle}>
      <div style={centerTextStyle}>{t("title")}</div>

      <div style={flexRowStyle}>
        <Card style={cardStyle}>
          <h3 style={cardHeadingStyle}>{product.contactPrompt}</h3>
          <BlackButton
            style={{ marginBottom: "30px", marginRight: "24px" }}
            onClick={handlePhoneClick}
          >
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />{" "}
            {data.promoJson.officeDisplayNumber}
          </BlackButton>
          <CreamButton
            style={{ marginBottom: "30px" }}
            onClick={handleWhatsappClick}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ marginRight: "10px", fontSize: "20px" }}
            />{" "}
            {data.promoJson.whatsAppDisplayNumber}
          </CreamButton>
        </Card>

        <Card style={cardStyle}>
          <h3 style={cardHeadingStyle}>{t("more-products")}</h3>
          <p>{t("visit-us")}</p>
          <div onClick={handleLocationClick} style={googleMapsLinkStyle}>
            <div>Google Maps</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "smaller" }}
            />
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default PromoContact;
