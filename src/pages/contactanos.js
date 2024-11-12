import React from "react";
import Newsletter from "../components/newsletter/Newsletter";
import SocialIcons from "../components/socialIcons/SocialIcons";
import Seo from "../components/Seo";
import ContactForm from "../components/contactForm/ContactForm";
import { useStaticQuery, graphql } from "gatsby";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Layout from "../templates/Layout";
const Contactanos = (params) => {
  const contact = params.data.globalJson.contact;
  const data = [
    {
      title: "Dirección",
      icon: <FaMapMarkerAlt />,
      label: contact.address.text.join(" "),
      url: contact.address.url,
    },
    {
      title: "Mail",
      icon: <MdMail />,
      label: contact.email.base,
      url: `mailto:${contact.email.base}`,
    },
    {
      title: "Mail Ventas",
      icon: <MdMail />,
      label: contact.email.sales,
      url: `mailto:${contact.email.sales}`,
    },
    {
      title: "Teléfono",
      icon: <FaPhone />,
      label: contact.phone.base,
      url: `tel:${contact.phone.base}`,
    },
    {
      title: "Whatsapp",
      icon: <FaWhatsapp />,
      label: contact.phone.whatsapp,
      url: contact.phone.whatsAppLink,
    },
  ];

  return (
    <Layout>
      <Seo title="Contacto" />
      <section className="pt-4">
        <div className="section-title-container lg:w-4/5">
          <h2 className="h2">ENVÍANOS UN MENSAJE</h2>
          <p>
            ¿Pregunta, comentario o sugerencia? Nos encanta responder preguntas,
            conocer comentarios y escuchar sugerencias.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-12 gap-8">
        <ContactForm className="col-span-12 md:col-span-9" />
        <div className="flex flex-col col-span-12 gap-4 md:col-span-3">
          <div className="flex flex-col gap-4 text-sm">
            {data.map((dataItem, i) => {
              return (
                <div key={i}>
                  <h3>{dataItem.title}:</h3>
                  <a href={dataItem.url}>
                    {React.cloneElement(dataItem.icon, { className: "inline" })}{" "}
                    <span>{dataItem.label}</span>
                  </a>
                </div>
              );
            })}
          </div>
          <SocialIcons dark />
          <Newsletter showText />
        </div>
      </section>
    </Layout>
  );
};

export default Contactanos;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    globalJson {
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
    }
  }
`;
