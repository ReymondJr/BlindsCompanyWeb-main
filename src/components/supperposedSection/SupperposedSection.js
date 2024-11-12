import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';

const SupperposedSection = ({ data }) => {
    const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true });

    return (
        <section className="pt-base" ref={ref}>
            <div className="section-title-container">
                <h2 className="h2">{data.title}</h2>
            </div>
            <div className="relative">
                <div
                    className={`relative z-10 w-full p-4 bg-white border rounded md:w-1/2 md:p-6 lg:p-16 md:absolute md:top-1/2 transition-all duration-700 ${
                        inView
                            ? 'translate-y-0 md:-translate-y-1/2 opacity-100'
                            : 'translate-y-12 md:-translate-y-12 opacity-0'
                    }`}
                >
                    <h3 className="pb-3 text-xl">{data.card.title}</h3>
                    <p className="py-3 border-y">{data.card.description}</p>
                </div>
                <div className="flex justify-center w-full mt-6 ml-auto md:w-1/2 md:mt-0 md:block">
                    <GatsbyImage
                        image={data.card.image.src.childImageSharp.gatsbyImageData}
                        alt=""
                        className="object-cover md:-ml-10 md:w-full"
                        style={{ aspectRatio: '78 / 85' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SupperposedSection;
