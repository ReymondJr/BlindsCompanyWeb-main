import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  HeaderItems,
  ItemsContainer,
  PhoneNumbersContainer,
  IconText,
  ContactText,
  ClickIcon,
} from "./PromoHeaderStyles";
import { Container } from "../SharedStyles";
import { useTranslation } from "react-i18next";

const PromoHeader = ({ product }) => {
  const { t } = useTranslation("translations", { keyPrefix: "promo-header" });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        companyLocationLink
        whatsAppLink
        officeNumber
        logo {
          childImageSharp {
            gatsbyImageData(quality: 90)
          }
        }
        header {
          items
        }
      }
      globalJson {
        contact {
          icon {
            publicURL
          }
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

  const handleLocationClick = () => {
    window.open(locationLink, "_blank");
  };

  const handleContactClick = () => {
    navigate(product?.slug ? `/contacto-${product.slug}` : "/contacto-general");
  };

  const items = data.promoJson.header.items;

  return (
    <Fragment>
      <Container style={{ padding: "35px" }}>
        <HeaderItems>
          <IconText onClick={handleLocationClick}>
            <FontAwesomeIcon icon={faLocationDot} />
            {t("visit-us")}
          </IconText>
          <GatsbyImage
            image={data.promoJson.logo.childImageSharp.gatsbyImageData}
            style={{ width: "200px" }}
            alt={"logo"}
          />
          <PhoneNumbersContainer>
            <ContactText>
              <IconText onClick={handleContactClick}>
                {t("contact-us")}
              </IconText>
              <ClickIcon>
                <img
                  src={data.globalJson.contact.icon.publicURL}
                  alt=""
                  style={{ height: "25px", width: "25px" }}
                  objectFit="contain"
                />
              </ClickIcon>
            </ContactText>
          </PhoneNumbersContainer>
        </HeaderItems>
      </Container>
    </Fragment>
  );
};

export default PromoHeader;
