import React from "react";
import { Container } from "../SharedStyles";
import { BlackButton } from "./PromoFooterStyles";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { FooterLink, FooterItem } from "./PromoFooterStyles";
import { useTranslation } from "react-i18next";

const PromoFooter = ({ product }) => {
  const { t } = useTranslation("translations", { keyPrefix: "promo-footer" });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        whatsAppDisplayNumber
        instagramHandle
        facebookHandle
        whatsAppLink
        facebookLink
        instagramLink
        logo {
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
      }
    }
  `);

  const whatsAppLink = data.promoJson.whatsAppLink;

  const instagramLink = data.promoJson.instagramLink;

  const facebookLink = data.promoJson.facebookLink;

  const handleWhatsappClick = () => {
    window.open(
      `${whatsAppLink}?text=¡Hola!%20Me%20Interesa%20el%20producto%20${product.slug
        .split("-")
        .join(" ")
        .toUpperCase()}`,
      "_blank"
    );
  };

  const handleInstagramClick = () => {
    window.open(instagramLink, "_blank");
  };

  const handleFacebookClick = () => {
    window.open(facebookLink, "_blank");
  };

  return (
    <div
      style={{
        backgroundColor: "#d5cec7",
        color: "#292b2c",
        paddingTop: "48px",
        paddingBottom: "24px",
      }}
    >
      <Container>
        <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "15%" }}
          >
            <h4 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {t("title")}
            </h4>
            <div>
              <FooterLink to="/productos">{t("curtains")}</FooterLink>
            </div>
            <div>
              <FooterLink to="/producto-cortinas-perma">
                {t("perma")}
              </FooterLink>
            </div>
            <div>
              <FooterLink to="/productos">{t("blind")}</FooterLink>
            </div>
            <div>
              <FooterLink to="/producto-palilleria">
                {t("palilleria")}
              </FooterLink>
            </div>
            <div>
              <FooterLink to="/producto-shutters">{t("shutters")}</FooterLink>
            </div>
            <div>
              <FooterLink to="/producto-mallas-de-seguridad">
                {t("safety-nets")}
              </FooterLink>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "28%",
              fontSize: "17px",
            }}
          >
            <h4 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {t("follow-us")}
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <FooterItem onClick={handleWhatsappClick}>
                <FontAwesomeIcon
                  size="lg"
                  icon={faWhatsapp}
                  style={{ marginRight: "10px" }}
                />
                {data.promoJson.whatsAppDisplayNumber}
              </FooterItem>

              <FooterItem onClick={handleInstagramClick}>
                <FontAwesomeIcon
                  size="lg"
                  icon={faInstagram}
                  style={{ marginRight: "10px" }}
                />
                {data.promoJson.instagramHandle}
              </FooterItem>

              <FooterItem onClick={handleFacebookClick}>
                <FontAwesomeIcon
                  size="lg"
                  icon={faFacebook}
                  style={{ marginRight: "10px" }}
                />
                {data.promoJson.facebookHandle}
              </FooterItem>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "28%" }}
          >
            <h4 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {t("newsletter")}
            </h4>

            <div>{t("subscribe")}</div>
            <div>
              <input
                class="appearance-none border rounded px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                style={{ padding: "2px", marginTop: "15px", width: "75%" }}
              />
            </div>
            <div>
              <BlackButton
                style={{
                  fontSize: "14",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                {t("send")}
              </BlackButton>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "28%" }}
          >
            <h4 style={{ fontSize: "24px", marginBottom: "10px" }}>
              {t("contact-us")}
            </h4>
            <div>{t("questions")}</div>
            <div>
              <BlackButton
                onClick={() =>
                  navigate(
                    product?.slug
                      ? `/contacto-${product.slug}`
                      : "/contacto-general"
                  )
                }
                style={{ fontSize: "14", marginTop: "15px" }}
              >
                {t("questions-contact")}
              </BlackButton>
            </div>
          </div>
        </div>
      </Container>

      <hr style={{ borderColor: "black", margin: "16px", marginBottom: "0" }} />
      <Container>
        <span>
          <Link to={"/termsandConditions"}>Terminos y Condiciones</Link> | Aviso
        </span>
        <div style={{ textAlign: "center" }}>
          <GatsbyImage
            image={data.promoJson.logo.childImageSharp.gatsbyImageData}
            style={{ maxWidth: "200px" }}
            alt={"logo"}
          />
        </div>
      </Container>
    </div>
  );
};

export default PromoFooter;
