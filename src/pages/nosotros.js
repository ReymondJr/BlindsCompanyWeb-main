import React from "react";
import Hero from "../components/hero/Hero";
import HistorySection from "../components/historySection/HistorySection";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../templates/Layout";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Sobre Nosotros" />
      <Hero
        media={data.aboutJson.hero.image}
        subtitle="BLINDS COMPANY BY PROYESOL, UNA COMPAÑIA FAMILIAR CON MAS DE 25 AÑOS"
      />
      <HistorySection />
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    aboutJson {
      hero {
        image {
          src {
            childImageSharp {
              gatsbyImageData(width: 1440)
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
