import React from "react";
import { Fragment } from "react";
import PromoHero from "../components/Promo/promoHero/PromoHero";
import PromoSteps from "../components/Promo/promoSteps/PromoSteps";
import PromoContent from "../components/Promo/PromoContent/PromoContent";
import PromoContact from "../components/Promo/PromoContact/PromoContact";
import PromoFooter from "../components/Promo/PromoFooter/PromoFooter";
import PromoCarousel from "../components/Promo/PromoCarousel/PromoCarousel";
import PromoMobilePage from "../components/promoMobile/promoMobilePage/PromoMobilePage";
import PromoWhatsappAction from "../components/Promo/PromoActionButtons/PromoWhatsappAction";
import PromoPhoneAction from "../components/Promo/PromoActionButtons/PromoPhoneAction";
import MediaQuery from "react-responsive";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import enTs from "../locales/en/translations.json";
import PromoHeader from "../components/Promo/promoHeader/PromoHeader";

const PromoPage = ({ pageContext: { data } }) => {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "translations", enTs, true);
  i18n.changeLanguage(data.language ?? "es");
  return (
    <Fragment>
      <MediaQuery query="(max-width: 995px)">
        <Fragment>
          <PromoWhatsappAction keyword={data.heroTitle} />
          <PromoPhoneAction />
          <PromoMobilePage product={data} />
        </Fragment>
      </MediaQuery>

      <MediaQuery query="(min-width: 996px)">
        <Fragment>
          <PromoWhatsappAction keyword={data.heroTitle} />
          <PromoHeader product={data} />
          <PromoHero product={data} />
          <PromoSteps product={data} />
          <PromoContent product={data} />
          <PromoCarousel product={data} />
          <PromoContact product={data} />
          <PromoFooter product={data} />
        </Fragment>
      </MediaQuery>
    </Fragment>
  );
};

export default PromoPage;

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
