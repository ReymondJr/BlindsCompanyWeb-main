import React from "react";
import { Card, CreamButton } from "./PromoMobileContactStyles";
import { BlackButton } from "./PromoMobileContactStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useStaticQuery, graphql } from 'gatsby';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from "react-i18next";

const PromoMobileContact = ({ product }) => {

  const {t} = useTranslation("translations", {keyPrefix:"promo-mobile-contact"})

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

  const whatsAppLink = data.promoJson.whatsAppLink;

  const phoneNumber = data.promoJson.officeNumber;

  const locationLink = data.promoJson.companyLocationLink;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(whatsAppLink, '_blank');
  };

  const handleLocationClick = () => {
    window.open(locationLink, '_blank');
  };

  return (
    <div style={{ paddingLeft: '12px', padding: '12px' }}>
      <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '50px', color: '#292b2c' }}>
        {t("title")}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '30px' }}>
        <Card style={{textAlign:'center'}}>
          <h3 style={{ fontSize: '23px', marginBottom: '30px', color: '#292b2c' }}>{product.contactPrompt}</h3>
          <BlackButton style={{ marginBottom: '30px' }} onClick={handlePhoneClick}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> {data.promoJson.officeDisplayNumber}
          </BlackButton>
          <CreamButton style={{ marginBottom: '30px' }} onClick={handleWhatsappClick}>
            <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', fontSize:'20px' }} /> {data.promoJson.whatsAppDisplayNumber}
          </CreamButton>
        </Card>

        <Card style={{textAlign:'center'}}>
          <h3 style={{ fontSize: '23px', marginBottom: '30px', color: '#292b2c' }}>{t("more-products")}</h3>
          <p>
            {t('visit-us')}
          </p>

          <div
            onClick={handleLocationClick}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '5px',
              alignItems: 'center',
              marginTop: '20px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}

            css={{
              '&:hover': {
                color: 'black'
              }
            }}
          >
            <div>Google Maps</div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 'smaller' }} />
          </div>

        </Card>
      </div>

    </div>

  )

}

export default PromoMobileContact