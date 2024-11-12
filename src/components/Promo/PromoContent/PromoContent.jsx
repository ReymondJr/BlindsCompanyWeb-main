import React, { useEffect } from "react";
import { Container } from "../SharedStyles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const PromoContent = ({ product }) => {

  useEffect(() => {
    AOS.init({
      once: true // Only animate elements once
    });
  }, []);

  return (
    <Container>
      {
        product.content.map((cont, index) => {
          return (index % 2 === 0 ? (

            <div data-aos="fade-right" style={{ display: 'flex', flexDirection: 'row', marginBottom: '100px' }}>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingRight: '50px' }}>

                <h2 style={{ fontSize: '32px', color: '#292b2c' }}>
                  {cont.title}
                </h2>

                <div style={{ fontSize: '18px' }}>
                  <div dangerouslySetInnerHTML={{ __html: cont.description }} />
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {cont.callToAction ?
                  <Link to={`/contacto-${product.slug}`} style={{fontSize:'18px'}}>
                    {cont.callToAction.toUpperCase()}
                    <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '10px' }} />
                  </Link>
                   : ''}
                </div>
              </div>

              <div style={{ width: '50%' }}>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData} alt={product.imageAlt} style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
              </div>

            </div>
          ) : (

            <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'row', marginBottom: '100px' }}>

              <div style={{ width: '50%' }}>
                <GatsbyImage image={cont.image.childImageSharp.gatsbyImageData} alt={product.imageAlt} style={{ width: '100%', height: '360px', objectFit: 'cover' }} />
              </div>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', paddingLeft: '50px' }}>
                <h2 style={{ fontSize: '32px' }}>
                  {cont.title}
                </h2>

                <div style={{ fontSize: '18px' }}>
                  <div dangerouslySetInnerHTML={{ __html: cont.description }} />
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {cont.callToAction ?
                  <Link to={`/contacto-${product.slug}`} style={{fontSize:'18px'}}>
                    {cont.callToAction.toUpperCase()}
                    <FontAwesomeIcon icon={faChevronRight} style={{ marginLeft: '10px' }} />
                  </Link>
                   : ''}
                </div>

              </div>
            </div>

          ))

        })
      }

    </Container>
  )
}

export default PromoContent