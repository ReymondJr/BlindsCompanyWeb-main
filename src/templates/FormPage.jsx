import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import MediaQuery from "react-responsive";
import PromoForm from "../components/Promo/promoForm/promoForm";
import PromoFooter from "../components/Promo/PromoFooter/PromoFooter";
import PromoMobileFooter from "../components/promoMobile/PromoMobileFooter/PromoMobileFooter";
import PromoMobileForm from "../components/promoMobile/PromoMobileForm/PromoMobileForm";
import { useTranslation } from "react-i18next";
import enTs from "../locales/en/translations.json";
import PromoMobileHeader from "../components/promoMobile/promoMobileHeader/PromoMobileHeader";
import PromoHeader from "../components/Promo/promoHeader/PromoHeader";

const FormPage = ({ pageContext: { data } }) => {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "translations", enTs, true);
  i18n.changeLanguage(data.language ?? "es");

  const imageData = data.image.childImageSharp.gatsbyImageData;

  return (
    <Fragment>
      <MediaQuery query="(max-width: 995px)">
        <PromoMobileHeader />
        <PromoMobileForm data={data} />
        <PromoMobileFooter />
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
        <PromoHeader product={data} />
        <PromoForm data={data} />
        <PromoFooter product={data} />
      </MediaQuery>
    </Fragment>
  );
};

export default FormPage;

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
