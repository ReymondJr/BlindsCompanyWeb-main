import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../util/Link";

const ProductsShowcase = () => {
  const data = useStaticQuery(graphql`
    query {
      allProductCategoriesJson {
        edges {
          node {
            title
            shortTitle
            hash
            products {
              title
              slug
              subtitle
              featuredImage {
                src {
                  childImageSharp {
                    gatsbyImageData(width: 560)
                  }
                }
                alt
              }
            }
          }
        }
      }
    }
  `);

  const categories = data.allProductCategoriesJson.edges.map(
    ({ node }) => node
  );

  return (
    <>
      <aside className="z-40 bg-neutral-100 top-[85px] left-0 full-bleed text-center">
        <div className="container">
          <div className="pt-4 section-title-container">
            <h2 className="h2">Nuestros Productos</h2>
          </div>
        </div>
      </aside>
      <section className="pt-base">
        <div className="flex flex-col gap-10">
          {categories.map((category) => {
            return (
              <div
                key={category.hash}
                id={category.hash}
                style={{ scrollMarginTop: "100px" }}
              >
                <div className="mb-12 section-title-container">
                  <h2 className="h2">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {category.products.map((product) => {
                    return (
                      <div>
                        <Link to={`/producto-${product.slug}`}>
                          <GatsbyImage
                            image={
                              product.featuredImage.src.childImageSharp
                                .gatsbyImageData
                            }
                            alt={product.featuredImage.alt}
                            className="h-87.5 w-full"
                            objectFit="cover"
                          />
                          <h3 className="mt-3 font-normal arrow-container">
                            <span className="with-arrow">
                              <span className="uppercase">{product.title}</span>
                              {product.subtitle && ` - ${product.subtitle}`}
                            </span>
                          </h3>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductsShowcase;
