import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, meta, title, image }) => {
    meta = meta ? meta : [];
    description = description ? description : '';

    const { site, file } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                    }
                }
                file(relativePath: { regex: "/social-default-image.png/" }) {
                    publicURL
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    title = title || site.siteMetadata.title;
    const img_url = image ? image.src : `${process.env.GATSBY_URL}/${file.publicURL}`;

    const imageTags = [
        {
            property: 'og:image',
            content: img_url,
        },
        {
            property: 'twitter:image',
            content: img_url,
        },
        {
            name: 'twitter:card',
            content: image ? 'summary_large_image' : 'summary',
        },
    ];

    const extraTags = [...imageTags, ...meta];
    const socialMediaTitle =
        site.siteMetadata.title === title ? title : `${title} | ${site.siteMetadata.title}`;

    return (
        <Helmet
            htmlAttributes={{
                lang: 'es',
            }}
            title={title}
            titleTemplate={
                site.siteMetadata.title === title ? `%s` : `%s | ${site.siteMetadata.title}`
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: socialMediaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },

                {
                    name: `twitter:title`,
                    content: socialMediaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: site.siteMetadata.keywords.join(','),
                },
                ...extraTags,
            ]}
        />
    );
};

export default Seo;
