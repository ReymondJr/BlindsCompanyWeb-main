import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const HistorySection = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutJson {
        infoSection {
          blocks {
            title
            description
            img {
              src {
                childImageSharp {
                  gatsbyImageData(width: 600)
                }
              }
              alt
            }
          }
        }
      }
    }
  `);

  return (
    <section className="pt-base">
      <div className="section-title-container lg:w-4/5">
        <p>
          En nuestra calidad de especialistas en la confección de cortinas,
          brindamos a nuestros clientes las soluciones de sombreado más óptimas
          que incluyen cortinas, permas, toldos, shutters y mallas para
          balcones, adecuadas para cualquier requisito o moda. Gracias a los
          procedimientos de fabricación más rigurosos en el sector, presentamos
          colecciones de alta calidad, sistemas de vanguardia y tecnología de
          punta. Además, aseguramos la mejor relación precio-calidad mediante la
          importación directa de nuestros materiales.
        </p>
      </div>
      <div className="section-title-container">
        <h2 className="h2">Vertiendes Blinds Company</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {data.aboutJson.infoSection.blocks.map((block, i) => {
          return (
            <div key={i}>
              <GatsbyImage
                image={block.img.src.childImageSharp.gatsbyImageData}
                alt={block.img.alt}
                className="h-87.5 w-full"
                objectFit="cover"
                imgClassName="object-top"
              />
              <h3 className="mt-4 uppercase">{block.title}</h3>
              <p className="mt-5 text-justify">{block.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HistorySection;
