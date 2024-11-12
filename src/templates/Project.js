import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/hero/Hero';
import ContactForm from '../components/contactForm/ContactForm';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Project = ({ data: { projectsListJson: project } }) => {
    return (
        <>
            <Seo title={project.title} />
            <Hero
                title={project.title}
                subtitle={project.subtitle}
                video
                media={project.videoUrl}
            />
            <section className="mt-6 section-title-container lg:w-4/5">
                <h2 className="font-normal h2">{project.intro.title}</h2>
                <p className="text-sm">{project.intro.description}</p>
            </section>
            <section className="mt-6">
                <h2 className="h2">{project.cards.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {project.cards.items.map((card, i) => {
                        return (
                            <div key={i}>
                                <GatsbyImage
                                    image={card.image.url.childImageSharp.gatsbyImageData}
                                    alt={card.image.alt}
                                    className="h-72 md:h-87.5 mb-2"
                                />
                                <h3 className="mb-2 uppercase">{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="mt-10">
                <div className="section-title-container">
                    <h2 className="h2">¿Estás listo para el futuro?</h2>
                    <h3 className="uppercase">Déjanos un mensaje</h3>
                </div>
                <ContactForm className="w-full md:w-8/12" />
            </section>
        </>
    );
};

export const query = graphql`
    query ($slug: String!) {
        projectsListJson(slug: { eq: $slug }) {
            title
            subtitle
            videoUrl
            intro {
                title
                description
            }
            cards {
                title
                items {
                    title
                    description
                    image {
                        url {
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
`;

export default Project;
