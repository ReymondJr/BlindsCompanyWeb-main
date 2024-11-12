import React, { Fragment } from "react";
import { Container } from "../SharedStyles";
import PromoFooter from "../PromoFooter/PromoFooter";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PromoWhatsappAction from "../../Promo/PromoActionButtons/PromoWhatsappAction";
import PromoEmailForm from "../PromoEmailForm/promoEmailForm";
import { useTranslation } from "react-i18next";
import PromoHeader from "../promoHeader/PromoHeader";
import Navbar from "../../../components/navbar/Navbar";

const PromoContactPage = ({ pageData }) => {
  const { t } = useTranslation("translations", {
    keyPrefix: "promo-contact-page",
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
        companyEmail
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

  const mailButtonHandler = () => {
    const recipient = data.promoJson.companyEmail;
    const subject = "SOLICITUD DE MEDICIÓN PROFESIONAL";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
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

  return (
    <Fragment>
      <PromoWhatsappAction keyword={pageData.bannerTitle} />
      {pageData.slug == "general" && (
        <Container>
          <Navbar removePaddings />
        </Container>
      )}
      {pageData.slug != "general" && <PromoHeader product={pageData} />}

      <Container>
        <div
          style={{ position: "relative", width: "100%", marginBottom: "30px" }}
        >
          <GatsbyImage
            image={pageData.bannerImage.childImageSharp.gatsbyImageData}
            style={{ width: "100%", height: "1025px" }}
            alt={pageData.imageAlt}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              marginBottom: "50px",
              marginLeft: "30px",
            }}
          >
            <h2 style={{ fontSize: "60px", color: "#fff" }}>
              {pageData.bannerTitle}
            </h2>
            <h4 style={{ fontSize: "24px", color: "#fff" }}>
              {pageData.bannerSubtitle}
            </h4>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "50px",
            marginBottom: "20px",
          }}
        >
          <PromoEmailForm title={pageData.formTitle} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "25px" }}>{pageData.infoTitle}</h2>
            <p style={{ fontSize: "17px" }}>{pageData.infoText}</p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "25px",
                justifyContent: "center",
              }}
            >
              {data.promoJson.contactIcons.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "45%",
                    aspectRatio: "1/1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <div
                    onClick={() => handleIconClick(item.name)}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: index < 2 ? 0 : "auto",
                      left: index % 2 === 0 ? 0 : "auto",
                      right: index % 2 === 0 ? "auto" : 0,
                      bottom: index >= 2 ? 0 : "auto",
                      border: "1px solid rgba(0,0,0,.125)",
                      borderRadius: "0.25rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      height: "270px",
                      width: "270px",
                    }}
                  >
                    <img
                      src={item.icon.publicURL}
                      alt={item.name}
                      style={{ width: "80px" }}
                    />
                    <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                      {t(item.name).toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <PromoFooter product={pageData} />
    </Fragment>
  );
};

export default PromoContactPage;
