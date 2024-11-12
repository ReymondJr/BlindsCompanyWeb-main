import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MdOutlineMail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import BlindsAltLogo from '../../images/icons/blinds_alt_logo.svg';
import WhatsappIcon from '../icons/WhatsappIcon';
import Link from '../util/Link';
import Newsletter from '../newsletter/Newsletter';
import SocialIcons from '../socialIcons/SocialIcons';
import { GatsbyImage } from 'gatsby-plugin-image';

const navbarTitleClassname = 'font-normal uppercase mb-4 text-center';
const iconSize = 12;

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            globalJson {
                navigation {
                    name
                    url
                }
                contact {
                    phone {
                        base
                        whatsapp
                        whatsAppLink
                    }
                    address {
                        text
                        url
                    }
                    email {
                        base
                        sales
                    }
                }
                partners {
                    name
                    url
                    image {
                        publicURL
                    }
                }
                catalogs {
                    name
                    viewLink
                    downloadLink
                    showOnFooter
                    image {
                        childImageSharp {
                            gatsbyImageData(width: 120)
                        }
                    }
                }
            }
        }
    `);

    const contactData = [
        {
            icon: <FaMapMarkerAlt size={iconSize} />,
            text: data.globalJson.contact.address.text,
            url: data.globalJson.contact.address.url,
            columns: 'col-span-2',
        },
        {
            icon: <BsFillTelephoneFill size={iconSize} />,
            text: data.globalJson.contact.phone.base,
            url: `tel:${data.globalJson.contact.phone.base}`,
            columns: 'col-span-1',
        },
        {
            icon: <WhatsappIcon className="w-3 h-3" />,
            text: data.globalJson.contact.phone.whatsapp,
            url: data.globalJson.contact.phone.whatsAppLink,
            columns: 'col-span-1',
        },
        {
            icon: <MdOutlineMail size={iconSize} />,
            text: data.globalJson.contact.email.base,
            url: `mailto:${data.globalJson.contact.email.base}`,
            columns: 'col-span-1',
        },
        {
            icon: <MdOutlineMail size={iconSize} />,
            text: data.globalJson.contact.email.sales,
            url: `mailto:${data.globalJson.contact.email.sales}`,
            columns: 'col-span-1',
        },
    ];

    const catalogs = data.globalJson.catalogs.filter((catalog) => catalog.showOnFooter);

    return (
        <footer className="text-sm text-white mt-28 bg-primary-500">
            <div className="container">
                <div className="flex justify-center py-6">
                    <img src={BlindsAltLogo} alt="Blinds Company Logo" className="mb-6 h-14" />
                </div>
                <div className="grid grid-cols-1 gap-12 mb-6 md:gap-8 xl:gap-16 md:grid-cols-3 xl:grid-cols-5">
                    <nav>
                        <h3 className={navbarTitleClassname}>Contacto</h3>
                        <ul
                            className="grid grid-cols-2 gap-3 mx-auto"
                            style={{ maxWidth: '300px' }}
                        >
                            {contactData.map((contact, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={`${contact.columns} bg-white text-primary-500`}
                                    >
                                        <Link
                                            to={contact.url}
                                            className="flex flex-col items-center py-3 text-3xs"
                                        >
                                            {contact.icon}
                                            <div className="mt-0.5">
                                                {typeof contact.text === 'string'
                                                    ? contact.text
                                                    : contact.text.map((row) => <p>{row}</p>)}
                                            </div>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <nav>
                        <h3 className={navbarTitleClassname}>Redes Sociales</h3>
                        <nav className="mb-6">
                            <SocialIcons center />
                        </nav>
                        <h3 className={navbarTitleClassname}>Newsletter</h3>
                        <div className="flex justify-center">
                            <Newsletter darkButton />
                        </div>
                    </nav>
                    <nav>
                        <h3 className={navbarTitleClassname}>Descargar Catálogos</h3>
                        <ul
                            className="grid grid-cols-2 gap-3 mx-auto"
                            style={{ maxWidth: '235px' }}
                        >
                            {catalogs.map((catalog, i) => {
                                return (
                                    <li
                                        key={i}
                                        className={`${i === 0 ? 'col-span-2' : 'col-span-1'}`}
                                    >
                                        <Link
                                            to={catalog.downloadLink}
                                            className="block h-16 mx-auto w-28"
                                        >
                                            <GatsbyImage
                                                image={
                                                    catalog.image.childImageSharp.gatsbyImageData
                                                }
                                                alt=""
                                                className="w-full h-full"
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <nav>
                        <h3 className={navbarTitleClassname}>Menú</h3>
                        <ul className="flex flex-col items-center gap-1">
                            {data.globalJson.navigation.map((link, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={link.url}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <nav>
                        <h3 className={navbarTitleClassname}>Compañeros</h3>
                        <ul className="flex flex-col items-center gap-2">
                            {data.globalJson.partners.map((partner, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={partner.url}>
                                            <img
                                                src={partner.image.publicURL}
                                                alt={`Visit ${partner.name}'s website`}
                                                className="object-contain w-24 h-8"
                                            />
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="mb-4 text-xs">
                    <hr className="my-4" />© {new Date().getFullYear()} Blinds Company. Todos los
                    derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
