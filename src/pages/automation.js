import React from "react";
import Hero from "../components/hero/Hero";
import { graphql } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../templates/Layout";
import CardGrid from "../components/cardGrid/CardGrid";

const AutomationPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Hero
        video
        media={data.automationJson.hero.video}
        mobileVideo={data.automationJson.hero.video}
        mp4Fallback={data.automationJson.hero.video}
      />
      <CardGrid data={data.automationJson.technologySection} height={300} />
      <CardGrid data={data.automationJson.easeOfUseSection} height={300} />
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
    automationJson {
      hero {
        video
      }
      technologySection {
        title
        products {
          title
          content
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      easeOfUseSection {
        title
        products {
          title
          content
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default AutomationPage;
