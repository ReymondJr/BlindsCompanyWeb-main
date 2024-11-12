
import React from "react";
import { useState } from "react";
import { BlackButton } from "./PromoMobileFooterStyles";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import SmoothCollapse from 'react-smooth-collapse';
import { navigate } from "gatsby";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

const PromoMobileFooter = ({product}) => {
  //const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);
  
  const {t} = useTranslation("translations", {keyPrefix:"promo-mobile-footer"})

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsAppLink
        facebookLink
        instagramLink
        logo{
          childImageSharp {
            gatsbyImageData(width:200)
          }
        } 
      }
    }
  `);


  const handleProductsCollapse = () => {
    setIsProductsExpanded(!isProductsExpanded)
  }

  const whatsAppLink = data.promoJson.whatsAppLink;

  const instagramLink = data.promoJson.instagramLink;

  const facebookLink = data.promoJson.facebookLink;


  const handleWhatsappClick = () => {
    window.open(whatsAppLink, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramLink, '_blank');
  };

  const handleFacebookClick = () => {
    window.open(facebookLink, '_blank');
  };


  return (
    <div style={{ backgroundColor: '#d5cec7', color: '#292b2c', paddingTop: '48px', paddingBottom: '24px', paddingLeft: '20px', paddingRight: '20px', marginTop: '40px' }}>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>


        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '18px' }}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleProductsCollapse}>
            <h4 style={{ fontSize: '21px', marginBottom: '0px' }}>
              {t("title")}
            </h4>
            {
              isProductsExpanded ? <FontAwesomeIcon size='lg' icon={faChevronUp} /> :
                <FontAwesomeIcon size='lg' icon={faChevronDown} />
            }

          </div>

          <SmoothCollapse expanded={isProductsExpanded}>
            <div>
              <Link to="/productos">{t('curtains')}</Link>
            </div>
            <div>
              <Link to="/producto-cortinas-perma">{t('perma')}</Link>
            </div>
            <div>
              <Link to="/productos">{t("blind")}</Link>
            </div>
            <div>
              <Link to="/producto-palilleria">{t('palilleria')}</Link>
            </div>
            <div>
              <Link to="/producto-shutters">{t('shutters')}</Link>
            </div>
            <div>
              <Link to="/producto-mallas-de-seguridad">{t('safety-nets')}</Link>
            </div>
          </SmoothCollapse>
        </div>


        <hr style={{ borderColor: 'black' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <h4 style={{ fontSize: '21px', marginBottom: '10px' }}>
            {t('newsletter')}
          </h4>

          <div>
            {t('subscribe')}
          </div>
          <div>
            <input class="appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" style={{ width: '50%', padding: '2px', marginTop: '15px' }} />
          </div>
          <div>
            <BlackButton style={{ fontSize: '14', marginTop: '10px', marginBottom: '20px' }}>
              {t('send')}
            </BlackButton>
          </div>

          <hr style={{ borderColor: 'black' }} />

          <h4 style={{ fontSize: '21px', marginBottom: '10px', marginTop: '15px' }}>
            {t('follow-us')}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <FontAwesomeIcon size='lg' icon={faWhatsapp} onClick={handleWhatsappClick} />
            <FontAwesomeIcon size='lg' icon={faInstagram} onClick={handleInstagramClick} />
            <FontAwesomeIcon size='lg' icon={faFacebook} onClick={handleFacebookClick} />
          </div>
        </div>

        <hr style={{ borderColor: 'black' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontSize: '24px', marginBottom: '10px' }}>
            {t('contact-us')}
          </h4>
          <div>
            {t('questions')}
          </div>
          <div>
            <BlackButton onClick={() => navigate(product?.slug?`/contacto-${product.slug}`:"/contacto-general")} style={{ fontSize: '14px', marginTop: '15px' }}>
              {t('questions-contact')}
            </BlackButton>
          </div>
        </div>

      </div>


      <hr style={{ borderColor: 'black', marginTop: '30px', marginBottom: '26px' }} />
      <div style={{ textAlign: 'center' }}>
        <GatsbyImage image={data.promoJson.logo.childImageSharp.gatsbyImageData} alt={'logo'} />
      </div>
    </div>
  )


}

export default PromoMobileFooter;