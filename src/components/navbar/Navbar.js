import React from "react";
import { useStaticQuery, graphql,} from "gatsby";
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
import catego  from '../../data/productCategories/productCategories.json';

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

  const navItems = catego.map(category => {
    return {
        title: category.title,
        products: category.products.map(product => ({
            title: product.title,
           
        }))
    };
});


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
    { name: "Blinds Company", url: "/nosotros" }, 
    // { name: "Home/Productos", url: "/productos" }, 
    { name: "Contactanos", url: "/contacto-general" }, 
  ].filter(crumb => crumb.name === "Home" || currentPath.includes(crumb.url.replace('/', ''))); // Filtra los elementos de breadcrumbs según la ruta actual


  const breadcrumbsCategory = [
    {
      "name": "Cortinas-Blackout",
      "url": "/producto-cortinas-blackout"
    },
    {
      "name": "Cortinas-Enrollables",
      "url": "/producto-cortinas-enrollables"
    },
    {
      "name": "Cortinas-Roller",
      "url": "/producto-cortinas-roller"
    },
    {
      "name": "Persianas-Blackout",
      "url": "/producto-persianas-blackout"
    },
    {
      "name": "Persianas-Enrollables",
      "url": "/producto-persianas-enrollables"
    },
    {
      "name": "Cortinas-Zebra",
      "url": "/producto-cortinas-zebra"
    },
    {
      "name": "Persianas-Zebra",
      "url": "/producto-persianas-zebra"
    },
    {
      "name": "Cortinas-Perma",
      "url": "/producto-cortinas-perma"
    },
    {
      "name": "Enrollables-Exterior",
      "url": "/producto-cortinas-enrollables-para-exterior"
    },
    {
      "name": "Estor-Enrollable",
      "url": "/producto-estor-enrollable"
    },
    {
      "name": "Estor-Exterior",
      "url": "/producto-estor-de-exterior"
    },
    {
      "name": "Malla-Protectora",
      "url": "/producto-malla-protectora"
    },
    {
      "name": "Mallas-Seguridad",
      "url": "/producto-mallas-de-seguridad"
    },
    {
      "name": "Mallas-Balcones",
      "url": "/producto-mallas-para-balcones"
    },
    {
      "name": "Shutters",
      "url": "/producto-soft-shutters"
    },
    {
      "name": "Cortinas-Verticales",
      "url": "/producto-cortinas-verticales"
    },
    {
      "name": "Cortinas-Visillo",
      "url": "/producto-cortinas-de-visillo"
    },
    {
      "name": "Cortinas-Modernas",
      "url": "/producto-cortinas-modernas"
    },
    {
      "name": "Roman-Shade",
      "url": "/producto-roman-shade"
    },
    {
      "name": "Toldo-Palillero",
      "url": "/producto-toldo-palillero"
    },
    {
      "name": "Toldo-Recto",
      "url": "/producto-toldo-punto-recto"
    },
    {
      "name": "Toldo-Retractil",
      "url": "/producto-toldo-retractil"
    },
    {
      "name": "Mallas-Mosquitos",
      "url": "/producto-mallas-para-mosquitos"
    },
    {
      "name": "Screen-Mosquitos",
      "url": "/producto-screen-para-mosquitos"
    },
    {
      "name": "Escrines-Ventanas",
      "url": "/producto-escrines-para-ventanas"
    },
    {
      "name": "Mosquiteras-Ventanas",
      "url": "/producto-mosquiteras-para-ventanas"
    },
    {
      "name": "Palilleria",
      "url": "/producto-palilleria"
    },
    {
      "name": "Panel-Deslizante",
      "url": "/producto-panel-deslizante"
    },
    {
      "name": "Japones-Deslizante",
      "url": "/producto-cortinas-panel-japones-deslizante"
    },
    {
      "name": "Ondas-Pefectas",
      "url": "/producto-cortinas-ondas-perfectas"
    },
    {
      "name": "Cortinas-Tachonadas",
      "url": "/producto-cortinas-tachonadas"
    },
    {
      "name": "Cortinas-Hoteleras",
      "url": "/producto-cortinas-hotelera"
    },
    {
      "name": "Riel-Hotelero",
      "url": "/producto-cortinas-de-riel-hotelero"
    },
    {
      "name": "Cortinas-Ripplefold",
      "url": "/producto-cortinas-ripplefold"
    },
    {
      "name": "Cortinas-Venecianas",
      "url": "/producto-cortinas-venecianas"
    },
    {
      "name": "Store-Santo-Domingo",
      "url": "/producto-curtain-store-in-santo-domingo"
    },
    {
      "name": "Store-Dominican-Republic",
      "url": "/producto-curtain-store-in-dominican-republic"
    },
    {
      "name": "Visillo-Modernas",
      "url": "/producto-cortinas-de-visillo-modernas"
    }
  ]
  

  
  // Si la ruta actual comienza con "producto", agrega un breadcrumb para "Productos"
  if (currentPath[0]?.startsWith("producto")) {
    const productTitle = currentPath.join('/'); // Une la ruta actual para formar el título del producto
    breadcrumbs.push({ name: "Productos", url: `/${productTitle}` }); // Agrega el breadcrumb de productos
  }

  // Si la ruta actual comienza con "producto", busca la categoría correspondiente
  if (currentPath[0]?.startsWith("producto")) {
    const productName = currentPath[0]; // Obtiene el nombre del producto de la ruta
    const matchedCategory = breadcrumbsCategory.find(category => category.url === `/${productName}`); // Busca la categoría que coincide con la ruta
    breadcrumbs.push({ name: matchedCategory ? matchedCategory.name : productName.replace(/-/g, ''), url: '' }); // Agrega el breadcrumb de la categoría encontrada
  }

  // Crea los breadcrumbs completos con las URLs correspondientes
  const fullBreadcrumbs = breadcrumbs.map((crumb, index) => {
    const url = `/${currentPath.slice(0, index + 1).join('/')}`; // Genera la URL para cada breadcrumb
    return { name: crumb.name, url }; // Devuelve el nombre y la URL del breadcrumb
  }).filter(crumb => !crumb.name.includes("productos") || currentPath[0]?.startsWith("categoria")); // Filtra los breadcrumbs según la condición
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
        <nav style={{paddingLeft: "15rem", paddingRight: "0" ,fontSize: "12px"}} >
            <ul className="flex justify-center space-x-2">
                {fullBreadcrumbs.map((crumb, index) => (
                  <li key={index}>
                    <Link to={crumb.url} className="text-blue-600" partiallyActive={crumb.url !== "/"}>
                      {crumb.name}
                    </Link>
                    {index < fullBreadcrumbs.length - 1 && <span> {'/'} </span>}
                  </li>
                ))}
              </ul>
            </nav>
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
