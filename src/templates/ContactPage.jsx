import React, { Fragment } from 'react';
import PromoContactPage from '../components/Promo/PromoContactPage/PromoContactPage';
import PromoMobileContactPage from '../components/promoMobile/PromoMobileContactPage/PromoMobileContactPage';
import { useStaticQuery, graphql } from 'gatsby';
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";
import enTs from "../locales/en/translations.json";

const PromoContactUs = ({ pageContext: { data } }) => {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "translations", enTs, true);
  i18n.changeLanguage(data.language ?? "es");

  return (
    <Fragment>

      <MediaQuery query="(min-width: 1255px)">
        <PromoContactPage  pageData={data} />
      </MediaQuery>

      <MediaQuery query="(max-width: 1254px)">
        <PromoMobileContactPage pageData={data} />
      </MediaQuery>
      
    </Fragment>
  );
}

export default PromoContactUs;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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