import React from "react";
import Navbar from "../components/navbar/Navbar";
import PromoFooter from "../components/Promo/PromoFooter/PromoFooter";
import WhatsappButton from "../components/whatsappButton/WhatsappButton";
import PromoMobileFooter from "../components/promoMobile/PromoMobileFooter/PromoMobileFooter";
import MediaQuery from "react-responsive";
import { useTranslation } from "react-i18next";
import { graphql } from "gatsby";
import enTs from "../locales/en/translations.json";
import "../styles/lib/typography.css";
import "../styles/tailwind/build.css";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  i18n.addResourceBundle("en", "translations", enTs, true);
  i18n.changeLanguage("es");
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 mb-12">
        <div className="container">{children}</div>
      </main>
      <WhatsappButton />
      <MediaQuery query="(max-width: 995px)">
        <PromoMobileFooter />
      </MediaQuery>
      <MediaQuery query="(min-width: 996px)">
        <PromoFooter />
      </MediaQuery>
    </>
  );
};

export default Layout;
