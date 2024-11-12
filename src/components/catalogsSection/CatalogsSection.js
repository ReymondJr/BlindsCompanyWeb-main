import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '../util/Link';

const CatalogsSection = ({ catalogs }) => {
    return (
        <section className="pt-base">
            <div className="section-title-container">
                <h2 className="h2">Busca Inspiración en nuestros catálogos</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {catalogs.map((catalog, i) => {
                    return (
                        <div className="max-w-sm mx-auto arrow-container md:max-w-none" key={i}>
                            <Link
                                aria-label={`Ver el catálogo ${catalog.name}`}
                                to={catalog.viewLink}
                            >
                                <GatsbyImage
                                    image={catalog.image.childImageSharp.gatsbyImageData}
                                    alt=""
                                    className="border h-50"
                                    imgClassName="object-contain object-left-top "
                                    objectFit="contain"
                                />
                                <p>{catalog.name}</p>
                            </Link>
                            <Link
                                aria-label={`Descargar el ${catalog.name}`}
                                to={catalog.downloadLink}
                                className="with-arrow"
                            >
                                Descargar
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CatalogsSection;
