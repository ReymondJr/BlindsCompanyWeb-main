import React from "react";
import { ImgWrapper, ContentWrapper, Title, BlackButton, CreamButton } from "./PromoMobileHeroStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from "react-i18next";

const PromoMobileHero = ({ product }) => {

  const {t} = useTranslation("translations", { keyPrefix:"promo-mobile-hero"})
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
    window.open(whatsAppLink, '_blank');
  };

  return (
    <ImgWrapper style={{ height: 'auto' }}>

      <GatsbyImage image={product.heroBanner.childImageSharp.gatsbyImageData} alt={product.imageAlt}
        style={{
          filter: 'brightness(80%)',
          width: '100%',
          height: '550px',
          objectFit: 'cover'
        }} />

      <ContentWrapper>
        <Title>{product.heroTitle}</Title>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <BlackButton onClick={handlePhoneClick}>
            <p>{t("phone-contact")}{data.promoJson.officeDisplayNumber}</p>
          </BlackButton>
          <CreamButton onClick={handleWhatsappClick}>
            <p>{t("whatsapp-contact")}{data.promoJson.whatsAppDisplayNumber}</p>
          </CreamButton>
        </div>
      </ContentWrapper>
    </ImgWrapper>
  );
}

export default PromoMobileHero;
