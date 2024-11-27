import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "../util/Link";
import WhatsappIcon from "../icons/WhatsappIcon";
import FacebookIcon from "../icons/FacebookIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconText } from "../Promo/promoHeader/PromoHeaderStyles";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ removePaddings }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo2" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, placeholder: NONE)
        }
      }
      promoJson {
        companyLocationLink
      }
      globalJson {
        navigation {
          name
          url
        }
        contact {
          icon {
            publicURL
          }
          social {
            facebook
            instagram
            linkedin
            youtube
          }
          phone {
            whatsapp
            whatsAppLink
          }
        }
      }
    }
  `);
  const [isNavbarExpanded, setNavbarExpanded] = React.useState(false);
  const expandableAreaRef = React.useRef();
  const locationLink = data.promoJson.companyLocationLink;
  const navigation = data.globalJson.navigation;

  const socialIcons = [
    {
      icon: <WhatsappIcon />,
      url: data.globalJson.contact.phone.whatsAppLink,
    },
    {
      icon: <InstagramIcon />,
      url: data.globalJson.contact.social.instagram,
    },
    {
      icon: <FacebookIcon />,
      url: data.globalJson.contact.social.facebook,
    },
    {
      icon: <YoutubeIcon />,
      url: data.globalJson.contact.social.youtube,
    },
    {
      icon: <LinkedinIcon />,
      url: data.globalJson.contact.social.linkedin,
    },
  ];

  const handleLocationClick = () => {
    window.open(locationLink, "_blank");
  };

  const currentPath = window.location.pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    ...currentPath.map((path, index) => {
      const url = `/${currentPath.slice(0, index + 1).join('/')}`;
      const navItem = navigation.find(nav => nav.url === url);
      return navItem ? { name: navItem.name, url } : { name: path, url };
    }),
  ];
  const fullBreadcrumbs = breadcrumbs.map((crumb, index) => {
    const url = `/${currentPath.slice(0, index + 1).join('/')}`;
    return { name: crumb.name, url };
  });

  return (
    <header className={`sticky top-0 bg-white border-b z-50 h-[85px]`}>
      <div className="container relative flex items-center justify-between h-full">
        <Link to="/" aria-label="Blinds Company" style={{ zIndex: 1 }}>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Blinds Company Logo"
            className={`!absolute top-0 left-0 h-full ${
              removePaddings ? "" : "lg:ml-8 ml-2"
            }`}
            objectFit="contain"
            style={{ maxWidth: "200px" }}
          />
        </Link>
        <button
          class={`block lg:hidden hamburger hamburger--squeeze ${
            isNavbarExpanded && "is-active"
          }`}
          type="button"
          onClick={() => setNavbarExpanded((prev) => !prev)}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <div
          className={`${
            isNavbarExpanded && "border-b"
          } lg:border-0 lg:pb-0 items-center justify-between flex-1 lg:flex absolute lg:relative bg-white top-full lg:mt-0 w-full container overflow-hidden lg:overflow-visible lg:top-0 lg:-ml-24`}
          style={{
            transition: "max-height 350ms",
            maxHeight: isNavbarExpanded
              ? `${expandableAreaRef.current.scrollHeight}px`
              : "0px",
          }}
          ref={expandableAreaRef}
        >
          <nav
            aria-label="Navegación principal"
            className="my-6 lg:-translate-x-1/2 lg:absolute lg:left-1/2 -top-1 lg:top-0 lg:my-0 lg:px-0 lg:w-full lg:-translate-y-1/2"
          >
            <ul className="flex flex-col justify-center text-sm uppercase lg:gap-4 lg:flex-row">
              {navigation.map((nav, i) => {
                return (
                  <li key={i} className="py-2 border-b lg:py-0 lg:border-b-0">
                    <Link
                      to={nav.url}
                      activeClassName="lg:before:scale-x-100 active"
                      className="inline-block text-center animated-underline"
                      partiallyActive={nav.url !== "/"}
                    >
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <nav>
            <ul className="flex justify-center space-x-2">
                {fullBreadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    <Link to={crumb.url} className="text-blue-600">
                      {crumb.name}
                    </Link>
                    {index < fullBreadcrumbs.length - 1 && <span> {'>'} </span>}
                  </li>
                ))}
              </ul>
            </nav>
          </nav>

         
          
          <nav
            className={`pb-2 lg:pb-0 pr-0 ${
              removePaddings ? "" : "lg:mr-8 mr-2"
            }`}
            style={{ position: "absolute", right: 0 }}
          >
            <IconText onClick={handleLocationClick}>
              VISITE NUESTRA TIENDA
              <FontAwesomeIcon icon={faLocationDot} />
            </IconText>
          </nav>
       </div>
        
      </div>
      
    </header>
  );
};

export default Navbar;
