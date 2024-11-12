import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '../util/Link';

const CategoriesSection = ({ categories }) => {
    return (
        <section className="pt-base">
            <div className="section-title-container">
                <h2 className="font-normal h2">Un mundo de soluciones solares</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">
                {categories.map((category, i) => {
                    return (
                        <div className="arrow-container">
                            <Link to={`/productos#${category.hash}`} key={i} className="block">
                                <GatsbyImage
                                    image={
                                        category.featuredImage.src.childImageSharp.gatsbyImageData
                                    }
                                    alt=""
                                    className="object-cover w-full h-36 md:h-[365px]"
                                />
                                <h3 className="inline-block mt-2 font-normal uppercase text-2sm with-arrow md:text-base">
                                    {category.title}
                                </h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CategoriesSection;
