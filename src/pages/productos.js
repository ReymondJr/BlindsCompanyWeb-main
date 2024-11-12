import React from "react";
import ProductsShowcase from "../components/productsShowcase/ProductsShowcase";
import Seo from "../components/Seo";
import Layout from "../templates/Layout";
import { graphql } from "gatsby";

const Productos = () => {
  return (
    <Layout>
      <Seo title="Productos" />
      <ProductsShowcase />
    </Layout>
  );
};

export default Productos;

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
  }
`;
