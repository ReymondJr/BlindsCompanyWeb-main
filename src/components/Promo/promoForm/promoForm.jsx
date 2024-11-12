import React from "react";
import { ContentWrapper } from "./PromoFormStyles";
import { GatsbyImage } from "gatsby-plugin-image";

import PromoEmailForm from "../PromoEmailForm/promoEmailForm";
import { Container } from "../SharedStyles";

const PromoForm = ({ data }) => {
  const imageData = data.image.childImageSharp.gatsbyImageData;

  return (
    <Container>
      <div style={{ height: "auto", position: "relative" }}>
        <GatsbyImage
          image={imageData}
          alt={data.imageAlt}
          style={{
            filter: "brightness(80%)",
            width: "100%",
            height: "900px",
            objectFit: "cover",
          }}
        />
        <ContentWrapper>
          <div style={{ backgroundColor: "white", padding: "20px" }}>
            <PromoEmailForm title={data.title} textAlign={"center"} />
          </div>
        </ContentWrapper>
      </div>
      <div style={{ margin: "20px" }}></div>
    </Container>
  );
};

export default PromoForm;
