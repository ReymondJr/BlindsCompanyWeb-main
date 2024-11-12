import React from "react";
import { Container } from "../SharedStyles";
import {
  ImgWrapper,
  ContentWrapper,
  Title,
  BlackButton,
  CreamButton,
} from "./PromoHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

const PromoHero = ({ product }) => {
  const { t } = useTranslation("translations", { keyPrefix: "promo-hero" });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsAppLink
        officeNumber
        whatsAppDisplayNumber
        officeDisplayNumber
      }
    }
  `);

  const whatsAppLink = data.promoJson.whatsAppLink;

  const phoneNumber = data.promoJson.officeNumber;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(
      `${whatsAppLink}?text=¡Hola!%20Me%20Interesa%20el%20producto%20${product.slug
        .split("-")
        .join(" ")
        .toUpperCase()}`,
      "_blank"
    );
  };

  return (
    <Container>
      <ImgWrapper style={{ height: "auto" }}>
        <GatsbyImage
          image={product.heroBanner.childImageSharp.gatsbyImageData}
          alt={product.imageAlt}
          style={{
            filter: "brightness(80%)",
            width: "100%",
            height: "725px",
            objectFit: "cover",
          }}
        />
        <ContentWrapper>
          <div>
            <Title>{product.heroTitle}</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <BlackButton onClick={handlePhoneClick}>
                <p>
                  {t("phone-contact")} <br />
                  {data.promoJson.officeDisplayNumber}
                </p>
              </BlackButton>
              <CreamButton onClick={handleWhatsappClick}>
                <p>
                  {t("whatsapp-contact")} <br />{" "}
                  {data.promoJson.whatsAppDisplayNumber}
                </p>
              </CreamButton>
            </div>
          </div>
        </ContentWrapper>
      </ImgWrapper>
    </Container>
  );
};

export default PromoHero;
