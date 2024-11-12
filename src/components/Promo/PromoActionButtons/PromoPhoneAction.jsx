import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

const PromoPhoneAction = () => {
    const {t} = useTranslation("translations", {keyPrefix:"promo-phone-action"})
    const data = useStaticQuery(graphql`
        query {
          promoJson {
            companyLocationLink
            whatsAppLink
            officeNumber
          }
        }
    `);

    const phoneStyle={
      position:'fixed',
      height:'70px',
      width:'70px',
      borderColor:'#b9b4ae',
      backgroundColor:'#d5cec7',
      borderWidth:'10px',
      right:'1rem',
      bottom:'3rem',
      zIndex:'50',
      borderRadius:'9999px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'

    }

    return (


          <a
              href={`tel:${data.promoJson.officeNumber}`}
              style={phoneStyle}
              aria-label={t('contact-us')}
          >
              <FontAwesomeIcon style={{color:'black'}} size='lg' icon={faPhone}/>
          </a>

        
    );
};

export default PromoPhoneAction;
