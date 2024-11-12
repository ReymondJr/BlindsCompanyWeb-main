import React from "react";
import { Container } from "../SharedStyles";
import "@splidejs/react-splide/css";
import { GatsbyImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

const PromoCarousel = ({ product }) => {
  const { t } = useTranslation("translations", { keyPrefix: "promo-carousel" });
  const gallery = product.gallery;

  const centerTextStyle = {
    textAlign: "center",
    fontSize: "32px",
    color: "#292b2c",
    marginBottom: "30px",
  };

  const flexRowStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    justifyContent: "center",
  };

  const imageContainerStyle = {
    width: "33%",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  };

  return (
    <Container>
      <div style={centerTextStyle}>
        {t("title", {
          productName: product.heroTitle,
          context: product.titleContext,
        })}
      </div>

      <div style={flexRowStyle}>
        {gallery.map((img, index) => (
          <div style={imageContainerStyle} key={index}>
            <GatsbyImage
              image={img.path.childImageSharp.gatsbyImageData}
              alt={product.imageAlt}
              style={imageStyle}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PromoCarousel;
