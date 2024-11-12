import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Link from '@/components/util/Link';
import Carousel from '@/components/carousel/Carousel';
import MultiLineParagraph from '@/components/util/MultilineParagprah';
import Seo from '../components/Seo';

const baseExtraCopy = [
    {
        title: 'Telas',
        text: 'Ofrecemos una amplia gama de colecciones, desde pantallas, madera y aluminio hasta cuero. Todas las colecciones están inspiradas en la moda, el arte, la arquitectura, la naturaleza, la tecnología y la belleza.',
    },
    {
        title: 'Sistema',
        text: 'Nuestra tecnología modular está diseñada para una excelente óptica, máxima comodidad y máxima seguridad. Gracias al diseño modular, se pueden crear infinitas configuraciones con un número mínimo de piezas.',
    },
    {
        title: 'Motorización',
        text: 'Nuestro revolucionario concepto de automatización, con soluciones innovadoras de motorización para hogares y edificios, es simple de operar: hace que la motorización sea accesible para todos',
    },
];

const Product = ({ pageContext: { data } }) => {
    const defaultExtraCopy = data.canShowDefaultExtraCopy ? baseExtraCopy : [];
    const extraCopy = data.extraCopy.length > 0 ? data.extraCopy : defaultExtraCopy;
    return (
        <>
            <Seo title={data.title} description={data.description || ''} />
            <section>
                <div className="relative">
                    <GatsbyImage
                        image={data.featuredImage.src.childImageSharp.gatsbyImageData}
                        alt={data.featuredImage.alt}
                        objectFit="cover"
                        className="relative z-0 brightness-[70%] h-[450px] lg:h-[580px] w-full"
                    />
                    <div className="absolute z-10 text-white bottom-8 left-8 lg:bottom-16 lg:left-16">
                        <h1 className="text-3.5xl md:text-7xl uppercase">
                            {data.heroTitle || data.title}
                        </h1>
                    </div>
                </div>
                <div className="mt-6 section-title-container lg:w-4/5">
                    <h2 className="font-normal h2">{data.subtitle || data.title}</h2>
                    <MultiLineParagraph text={data.description} className="text-sm" />
                    {extraCopy.map((block, i) => {
                        return (
                            <div className="my-6" key={i}>
                                <h3>{block.title}</h3>
                                <MultiLineParagraph text={block.text} className="text-sm" />
                            </div>
                        );
                    })}
                </div>
                {data.gallery.length > 0 && (
                    <section className="mt-12 -ml-2">
                        <h2 className="pl-2 mb-4 uppercase">Galería</h2>
                        <div className="hidden grid-cols-3 gap-8 lg:grid">
                            {data.gallery.slice(0, 3).map((image, i) => {
                                return (
                                    <a key={i} target="__blank" href={image.src.publicURL}>
                                        <GatsbyImage
                                            image={image.src.childImageSharp.gatsbyImageData}
                                            alt={image.alt}
                                            className="w-full h-96"
                                            objectFit="cover"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="block lg:hidden">
                            <Carousel>
                                {data.gallery.map((image, i) => {
                                    return (
                                        <a key={i} target="__blank" href={image.src.publicURL}>
                                            <GatsbyImage
                                                image={image.src.childImageSharp.gatsbyImageData}
                                                alt={image.alt}
                                                className="w-full h-72 md:h-64"
                                                objectFit="cover"
                                            />
                                        </a>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </section>
                )}
                {data.productCatalogs.length > 0 && (
                    <section className="mt-12 -ml-2">
                        <h2 className="pl-2 mb-4 uppercase">Telas</h2>
                        <Carousel>
                            {data.productCatalogs.map((catalog, i) => {
                                return (
                                    <a
                                        key={i}
                                        target="__blank"
                                        href={catalog.url}
                                        className="arrow-container"
                                    >
                                        <GatsbyImage
                                            image={catalog.img.src.childImageSharp.gatsbyImageData}
                                            alt={catalog.img.alt}
                                            className="w-full h-72"
                                            objectFit="cover"
                                        />
                                        <p className="inline-block mt-2 with-arrow">
                                            {catalog.name}
                                        </p>
                                    </a>
                                );
                            })}
                        </Carousel>
                    </section>
                )}
                {data.ctas && (
                    <div>
                        {data.ctas.map((cta) => {
                            return (
                                <Link
                                    to={cta.url}
                                    className="text-white bg-primary-500 py-1.5 px-3 rounded hover:bg-primary-800"
                                >
                                    {cta.label}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
};

export default Product;
