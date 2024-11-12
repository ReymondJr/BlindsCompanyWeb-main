import React from "react";
import Hero from "../components/hero/Hero";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../templates/Layout";
import CardGrid from "../components/cardGrid/CardGrid";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import BlindsDotsCarousel from "../components/carousel/DotsCarousel";
import MediaQuery from "react-responsive";
import styled from "@emotion/styled";

const HomepageButton = styled.button`
  color: black;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: 1px black solid;
  &:hover {
    background: black;
    color: white;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Hero
        title="INNOVACION EN CORTINAS MODERNAS"
        subtitle="SOLUCIONES AVANZADAS PARA INTERIORES Y EXTERIORES: CORTINAS, PERMAS, TOLDOS, SHUTTERS, MALLAS DE SEGURIDAD"
        media={data.homepageJson.hero.fallbackImage}
      />
      <CardGrid data={data.homepageJson.productsSection} height={300} />
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "2rem 0",
        }}
      >
        REFERENCIAS COMERCIALES
      </p>
      <BlindsDotsCarousel>
        {data.homepageJson.previousProjects.map((item, i) => {
          return (
            <div key={i}>
              <span className="relative">
                <div className="absolute z-10 text-white top-8 left-8 ">
                  <p className="text-3.5xl">{item.title}</p>
                </div>
                <GatsbyImage
                  image={item.img.childImageSharp.gatsbyImageData}
                  alt=""
                  className="h-72"
                  objectFit="cover"
                />
              </span>
            </div>
          );
        })}
      </BlindsDotsCarousel>
      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "2rem 0",
        }}
      >
        SOBRE BLINDS COMPANY
      </p>
      <div style={{ margin: "2rem 0" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            background: "#f5f3f2",
            flexWrap: "wrap",
          }}
        >
          <MediaQuery query="(min-width: 996px)">
            <div
              style={{
                maxWidth: "50%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h2
                style={{
                  fontSize: "2em",
                  fontWeight: "bold",
                  margin: "2rem 0",
                }}
              >
                MAS QUE CORTINAS: BLINDS COMPANY BY PROYESOL
              </h2>
              <p style={{ fontSize: "1em", lineHeight: "24px" }}>
                Descubre lo que nos hace diferentes, Desde nuestro impacto al
                medio ambiente, nuestros procesos únicos de fabricación, y la
                historia detrás de los pioneros en productos de sombreado en
                República Dominicana, Santo Domingo. Nos dedicamos a crear no
                solo cortinas enrollables, zebra, visillos y roman shades que
                capturan la belleza y la funcionalidad, sino también y una gama
                de productos para exteriores. Desde cortinas permas, hasta
                toldos retráctiles, palillería, shutters y mallas de seguridad
                perfectas para tu balcón.
              </p>
              <Link
                to="/nosotros"
                style={{ position: "absolute", bottom: "3em" }}
              >
                <HomepageButton>Más sobre nosotros</HomepageButton>
              </Link>
            </div>
            <StaticImage
              style={{ minWidth: "45%", height: "450px" }}
              src="../images/home/homepage2.jpg"
            />
          </MediaQuery>
          <MediaQuery query="(max-width: 995px)">
            <StaticImage
              style={{ minWidth: "45%", height: "450px" }}
              src="../images/home/homepage2.jpg"
            />
            <div
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                flexBasis: "100%",
              }}
            >
              <h2
                style={{
                  fontSize: "2em",
                  fontWeight: "bold",
                  margin: "2rem 0",
                }}
              >
                MAS QUE CORTINAS: BLINDS COMPANY BY PROYESOL
              </h2>
              <p style={{ fontSize: "1em", lineHeight: "24px" }}>
                Descubre lo que nos hace diferentes, Desde nuestro impacto al
                medio ambiente, nuestros procesos únicos de fabricación, y la
                historia detrás de los pioneros en productos de sombreado en
                República Dominicana, Santo Domingo. Nos dedicamos a crear no
                solo cortinas enrollables, zebra, visillos y roman shades que
                capturan la belleza y la funcionalidad, sino también y una gama
                de productos para exteriores. Desde cortinas permas, hasta
                toldos retráctiles, palillería, shutters y mallas de seguridad
                perfectas para tu balcón.
              </p>
              <Link to="/nosotros" style={{ marginTop: "2rem" }}>
                <HomepageButton>Más sobre nosotros</HomepageButton>
              </Link>
            </div>
          </MediaQuery>
        </div>
      </div>
      <CardGrid data={data.homepageJson.fabricsSection} height={300} />
    </Layout>
  );
};

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
    homepageJson {
      hero {
        fallbackImage {
          src {
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
          alt
        }
      }
      productsSection {
        title
        products {
          title
          content
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
          to
        }
      }
      fabricsSection {
        title
        products {
          title
          content
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      sideBySide {
        title
        card {
          title
          description
          image {
            src {
              childImageSharp {
                gatsbyImageData(width: 450)
              }
            }
          }
        }
      }
      previousProjects {
        title
        img {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
    }
    allProductCategoriesJson {
      edges {
        node {
          title
          hash
          featuredImage {
            src {
              childImageSharp {
                gatsbyImageData(width: 650)
              }
            }
          }
        }
      }
    }
    globalJson {
      catalogs {
        name
        viewLink
        downloadLink
        image {
          childImageSharp {
            gatsbyImageData(width: 650)
          }
        }
      }
    }
  }
`;

export default IndexPage;
