import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const PromoMobileContent = ({ product }) => {
  return (
    <div style={{ paddingLeft: '12px', paddingRight: '12px' }}>
      {
        product.content.map(cont => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '60px' }}>

              <div style={{ width: '100%' }}>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData} alt={product.imageAlt} style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
              </div>

              <h2 style={{ fontSize: '25px', color: '#292b2c', marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
                {cont.title}
              </h2>

              <div style={{ fontSize: '18px', textAlign: 'center' }}>
                <div dangerouslySetInnerHTML={{ __html: cont.description }} />
              </div>

              <div style={{ marginTop: '20px' }}>
                {cont.callToAction ?
                  <Link to="/promo-contact" style={{ fontSize: '18px' }}>
                    {cont.callToAction.toUpperCase()}
                    <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '10px' }} />
                  </Link>
                  : ''}
              </div>

            </div>
          )

        })
      }

    </div>
  )
}

export default PromoMobileContent