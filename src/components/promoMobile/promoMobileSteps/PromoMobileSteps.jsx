import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const PromoMobileSteps = ({product}) => {

  const {t} = useTranslation("translations", {keyPrefix:"promo-mobile-steps"})

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        steps {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(height: 80)
            }
          }
        }
      }
    }
  `);

  const steps = data.promoJson.steps;

  return (
    <>
      <div style={{textAlign:'center', fontSize:'24px', marginTop:'70px', paddingLeft:'12px', paddingRight:'12px'}}>
          {t('title', {productName: product.heroTitle})}
        </div>

        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', marginTop:'40px', marginBottom:'40px'}}>
          {steps.map(step =>(
            <div key={step.title} style={{display:'flex', flexDirection:'column', padding:'10px', gap:'5px', width:'50%'}}>
              <div style={{textAlign:'center', marginBottom:'20px'}}>
                <GatsbyImage image={step.image.childImageSharp.gatsbyImageData} alt={step.title} />
              </div>
              
              <div style={{fontWeight:'bold', fontSize:'16px', textAlign:'center'}}>
                {t(step.title)}
              </div>
              
              <div style={{textAlign:'center', fontSize:'15px'}}>
                {t(step.description)}
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default PromoMobileSteps;
