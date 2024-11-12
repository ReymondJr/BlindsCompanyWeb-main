import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlindsCarousel from "../components/carousel/Carousel";
import Seo from "../components/Seo";
import Link from "../components/util/Link";
import Layout from "../templates/Layout";

const Proyectos = ({ data: { projectsJson, allProjectsListJson } }) => {
  return (
    <Layout>
      <Seo title="Proyectos" />
      <div className="pt-base">
        <div className="section-title-container">
          <h2 className="h2">{projectsJson.projectsList.title}</h2>
        </div>
      </div>
      <section className="flex flex-col gap-8 lg:flex-row">
        {allProjectsListJson.edges.map(({ node: project }, i) => {
          return (
            <div key={i}>
              <Link to={`/proyectos/${project.slug}`}>
                <GatsbyImage
                  image={
                    project.thumbnail.image.url.childImageSharp.gatsbyImageData
                  }
                  alt={project.thumbnail.image.alt}
                  className="h-128"
                  objectFit="cover"
                />
                <p>{project.thumbnail.title}</p>
              </Link>
            </div>
          );
        })}
      </section>
      <section className="mt-7">
        <div className="section-title-container">
          <h2 className="h2">{projectsJson.commercialReferences.title}</h2>
        </div>
        <BlindsCarousel>
          {projectsJson.commercialReferences.previousProjects.map((item, i) => {
            return (
              <div key={i}>
                <a href={item.img.url.publicURL}>
                  <GatsbyImage
                    image={item.img.url.childImageSharp.gatsbyImageData}
                    alt={item.img.alt}
                    className="h-72"
                    objectFit="cover"
                  />
                  <p className="mt-1">{item.title}</p>
                </a>
              </div>
            );
          })}
        </BlindsCarousel>
      </section>
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
    projectsJson {
      projectsList {
        title
      }
      commercialReferences {
        title
        previousProjects {
          title
          img {
            url {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
              publicURL
            }
            alt
          }
        }
      }
    }
    allProjectsListJson {
      edges {
        node {
          thumbnail {
            title
            image {
              url {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
              alt
            }
          }
          slug
        }
      }
    }
  }
`;

export default Proyectos;
