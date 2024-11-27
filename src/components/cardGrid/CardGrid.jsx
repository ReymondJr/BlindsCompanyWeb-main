import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

const CardGrid = ({ data, height = 450 }) => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
        {data.title}
      </h2>
      <div
        className="grid grid-cols-1 gap-8 lg:gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        {data.products.map((product) => {
          if (product.to) {
            return (
              <Link to={product.to}>
                <GatsbyImage
                  className="relative z-0 w-full"
                  style={{ height: `${height}px`, borderRadius: '5%' }}
                  image={product.img.childImageSharp.gatsbyImageData}
                  objectFit="fill"
                  alt={product.title}
                />
                <h3 className="mt-3 font-normal arrow-container"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                   <span className="with-arrow" style={{ color: "black", fontSize: "1.5rem" }}>
                    {product.title}
                   </span>
                  
                  
                </h3>
                <p>{product.content}</p>
              </Link>
            );
          }
          return (
            <div>
              <GatsbyImage
                className="relative z-0 w-full"
                style={{ height: `${height}px`, borderRadius: "10%" }}
                image={product.img.childImageSharp.gatsbyImageData}
                objectFit="fill"
                alt={product.title}
              />
            <h3 className="mt-3 font-normal arrow-container"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                  }}
                >
                   <span className="with-arrow" style={{ color: "black", fontSize: "1.5rem" }}>
                    {product.title}
                   </span>
                  
                  
                </h3>
              <p>{product.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
