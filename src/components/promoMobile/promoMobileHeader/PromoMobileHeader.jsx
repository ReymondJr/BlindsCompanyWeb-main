import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCheck,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage } from "gatsby-plugin-image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import {
  HeaderItems,
  HeaderLogoItems,
  IconText,
  PhoneNumbersContainer,
} from "./PromoMobileHeaderStyles";

import SmoothCollapse from "react-smooth-collapse";
import { useTranslation } from "react-i18next";

const PromoMobileHeader = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("translations", {
    keyPrefix: "promo-mobile-header",
  });
  const data = useStaticQuery(graphql`
    query {
      promoJson {
        companyLocationLink
        whatsAppLink
        officeNumber
        whatsAppDisplayNumber
        officeDisplayNumber
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

  const items = data.promoJson.header.items;

  const splideOptions = {
    type: "loop",
    drag: "free",
    pagination: false,
    arrows: false,
    perPage: 1,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  };

  const whatsAppLink = data.promoJson.whatsAppLink;

  const phoneNumber = data.promoJson.officeNumber;

  const locationLink = data.promoJson.companyLocationLink;

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.open(whatsAppLink, "_blank");
  };

  const handleLocationClick = () => {
    window.open(locationLink, "_blank");
  };

  const handleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#d5cec7" }}>
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {items.map((item) => (
            <SplideSlide>
              <HeaderItems key={item}>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: "6px" }}
                />
                <div>{t(item)}</div>
              </HeaderItems>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <HeaderLogoItems>
        <FontAwesomeIcon
          size="lg"
          icon={faLocationDot}
          onClick={handleLocationClick}
        />

        <GatsbyImage
          image={data.promoJson.logo.childImageSharp.gatsbyImageData}
          alt={"logo"}
          style={{ width: "200px" }}
        />

        {isExpanded ? (
          <FontAwesomeIcon size="lg" icon={faXmark} onClick={handleCollapse} />
        ) : (
          <FontAwesomeIcon size="lg" icon={faBars} onClick={handleCollapse} />
        )}
      </HeaderLogoItems>

      <SmoothCollapse expanded={isExpanded}>
        <PhoneNumbersContainer>
          <IconText>
            <img
              src={data.globalJson.contact.icon.publicURL}
              alt=""
              style={{ height: "25px", width: "25px" }}
              objectFit="contain"
            />
            {data.promoJson.officeDisplayNumber}
          </IconText>
          <IconText>
            <FontAwesomeIcon
              size="lg"
              icon={faWhatsapp}
              onClick={handleWhatsappClick}
            />
            {data.promoJson.whatsAppDisplayNumber}
          </IconText>
        </PhoneNumbersContainer>
      </SmoothCollapse>
    </Fragment>
  );
};

export default PromoMobileHeader;
