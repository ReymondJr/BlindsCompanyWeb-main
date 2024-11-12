import React, { Fragment } from "react";
import { Container } from "../SharedStyles";
import PromoMobileFooter from "../PromoMobileFooter/PromoMobileFooter";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PromoWhatsappAction from "../../Promo/PromoActionButtons/PromoWhatsappAction";
import PromoPhoneAction from "../../Promo/PromoActionButtons/PromoPhoneAction";
import PromoEmailForm from "../../Promo/PromoEmailForm/promoEmailForm";
import { useTranslation } from "react-i18next";
import PromoMobileHeader from "../promoMobileHeader/PromoMobileHeader";

const PromoMobileContactPage = ({ pageData }) => {
  const { t } = useTranslation("translations", {
    keyPrefix: "promo-mobile-contact-page",
  });

  const data = useStaticQuery(graphql`
    query {
      promoJson {
        contactIcons {
          name
          icon {
            publicURL
          }
        }
        companyLocationLink
        whatsAppLink
        officeNumber
        logo {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
        header {
          items
        }
      }
    }
  `);

  const whatsAppLink = data.promoJson.whatsAppLink;

  const phoneNumber = data.promoJson.officeNumber;

  const locationLink = data.promoJson.companyLocationLink;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(
      `${whatsAppLink}?text=¡Hola!%20Me%20Interesa%20el%20producto%20${pageData.bannerTitle}`,
      "_blank"
    );
  };

  const handleLocationClick = () => {
    window.open(locationLink, "_blank");
  };

  const handleIconClick = (name) => {
    switch (name) {
      case "phone":
        handlePhoneClick();
        break;
      case "whatsapp":
        handleWhatsappClick();
        break;
      case "email":
        mailButtonHandler();
        break;
      case "visit-us":
        handleLocationClick();
        break;
      default:
        break;
    }
  };

  const mailButtonHandler = () => {
    const recipient = data.promoJson.companyEmail;
    const subject = "SOLICITUD DE MEDICIÓN PROFESIONAL";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Fragment>
      <PromoWhatsappAction keyword={pageData.bannerTitle} />
      <PromoPhoneAction />
      <PromoMobileHeader />

      <Container>
        <div
          style={{ position: "relative", width: "100%", marginBottom: "30px" }}
        >
          <GatsbyImage
            image={pageData.bannerImage.childImageSharp.gatsbyImageData}
            style={{ width: "100%", height: "100%" }}
            alt={pageData.imageAlt}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "10px",
            }}
          >
            <h2 style={{ fontSize: "35px", color: "#fff" }}>
              {pageData.bannerTitle}
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "25px" }}>{pageData.infoTitle}</h2>
            <p style={{ fontSize: "17px" }}>{pageData.infoText}</p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {data.promoJson.contactIcons.map((item) => {
                return (
                  <div style={{ padding: "15px", width: "50%" }}>
                    <div
                      onClick={() => handleIconClick(item.name)}
                      style={{
                        cursor: "pointer",
                        border: "1px solid rgba(0,0,0,.125)",
                        borderRadius: "0.25rem",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <img
                        s
                        src={item.icon.publicURL}
                        alt={item.name}
                        style={{ width: "80px" }}
                      />
                      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                        {t(item.name)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <PromoEmailForm textAlign={"center"} title={pageData.formTitle} />
        </div>
      </Container>

      <PromoMobileFooter />
    </Fragment>
  );
};

export default PromoMobileContactPage;
