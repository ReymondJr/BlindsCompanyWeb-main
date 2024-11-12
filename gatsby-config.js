const fs = require("fs");
const path = require("path");

process.env.NODE_ENV !== "production" ||
  (process.env.DEPLOYED !== "true" &&
    require("dotenv").config({
      path: `.env.${process.env.NODE_ENV}`,
    }));

const siteUrl = process.env.GATSBY_URL || "https://www.blindscompanyrd.com";

let localDataSources = [];
const baseDataPath = `${__dirname}/src/data`;
if (fs.existsSync(baseDataPath)) {
  localDataSources = fs.readdirSync(`${__dirname}/src/data`).map((dir) => {
    return {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `${dir}`,
        path: `${baseDataPath}/${dir}`,
      },
    };
  });
}

module.exports = {
  siteMetadata: {
    title: "Blinds Company",
    description: "Página Web oficial de Blinds Company.",
    keywords: [
      "Blinds Company",
      "Cortinas",
      "Shades",
      "Blinds",
      "Decoracion de interior",
      "Productos de interior",
      "Productos de exterior",
      "Decoraciones",
      "Privacidad",
      "Proteccion solar",
      "Interdeco",
      "Proyectos inteligente",
      "Proyectos ecologicos",
      "Trashpackers",
      "Trashpackers dominicana",
      "Trashpackers dominican republic",
      "Veneciana del caribe",
      "Shutter quisqueyanos",
      "Tissaje",
      "Cortinaje",
      "Hunter douglass",
      "Dopeco",
      "Vertilux",
      "Coulisse",
      "Coulisse BV",
      "Ingenieria",
      "Arquitectura",
      "Arte",
      "Naturaleza",
      "Diseño",
      "Tecnologia",
      "A la medida",
      "Alfombras",
      "Cortinas republica dominicana",
      "Cortinas santo domingo",
      "Cortinas punta cana",
      "Cortinas bavaro",
      "Cortinas higuey",
      "Cortinas samana",
      "Cortinas las terrenas",
      "Cortinas la romana",
      "Cortinas Santiago",
      "Blinds punta cana",
      "Shades punta cana",
      "Roller blinds punta cana",
      "Roller blinds santo domingo",
      "Cielos acuáticos",
      "Huracan soltec",
      "Gaviota",
      "Edwin shutters",
      "Shutters republica dominicana",
      "Cortinas republica dominicana",
      "Black out dominicana",
      "Black out",
      "Blinds company",
      "Proyesol",
      "Cortinas interdeco",
      "Alfombras interdeco",
      "Cortinas para licitación",
      "Somfy",
      "Shutters Quisqueyanos",
      "Prosombra",
      "Shutters antillanos",
      "Suluniversal",
      "Soluciones universal",
      "Somos shutters",
      "Escaribe shutters",
      "Shutters global",
      "Shutters high quality",
      "Delta shutters",
      "CORTINAS DE INTERIOR",
      "Roller",
      "Double roller",
      "Zebra",
      "Romantic",
      "Sheer",
      "Triple shade",
      "Soft venetian",
      "Capriccio",
      "Panel japones",
      "Panel deslizante",
      "Vertical",
      "Veneciana de madera",
      "Veneciana de aluminio",
      "Veneciana",
      "String",
      "Neolux",
      "Roller shades",
      "Neolux dual shades",
      "Vertical blinds",
      "Roman shades",
      "Sliding panels",
      "Cellular shades",
      "Horizontal blinds",
      "Cortinas romana",
      "Roman shade",
      "Plisadas",
      "Cortinas corredizas",
      "Cortina tradicional",
      "Cortinas tradicionales",
      "Cortina de visillo",
      "Visillos",
      "Cortinas sostenibles",
      "Cortinas eco friendly",
      "CORTINAS DE EXTERIOR",
      "Permas",
      "Perma",
      "Caduta",
      "Droppy",
      "Toldo de brazo",
      "Toldo helix",
      "Toldo retractable",
      "Patio",
      "Palillera",
      "Pergola",
      "MOTION",
      "Proyecto inteligente",
      "Domotica",
      "Cortinas inteligente",
      "Cortinas automatizadas",
      "Cortinas motorizadas",
      "Somfy",
      "Motion",
      "Coulisse motion",
      "Pull",
      "Cortina a control remoto",
      "Cortinas por control de voz",
      "Cortinas con Alexa",
      "Cortinas con asistente google",
      "Cortinas con siri",
      "Shutters inteligente",
      "Shutters automatizado",
      "toldo con sensores",
      "Sensores",
      "Sensor de viento",
      "Sensor de sol",
      "Sensor de lluvia",
      "SHUTTERS",
      "Proteccion ciclonica",
      "Protection contra huracanes",
      "Proteccion acustica",
      "shutters punta cana",
      "Shutters santo domingo",
      "Shutters punta cana",
      "Shutters higuey",
      "Shutters bavaro",
      "Shutters samana",
      "Shutters las terrenas",
      "Shutters la romana",
      "Shutters Santiago",
      "Shutters republica dominicana",
    ],
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-preact`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
                    {
                        allSitePage{
                            nodes{
                                path
                            }
                        }
                    }                    
                `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [378, 768, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    ...localDataSources,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: siteUrl,
        noTrailingSlash: true,
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
        legacy: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`es`, `en`],
        defaultLanguage: `es`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.blindscompanyrd.com",
        sitemap: "https://blindscompanyrd.com/sitemap/sitemap-index.xml",
        policy: [
          {
            userAgent: "*",
            allow: ["/images/", "/public/"],
            disallow: [
              "/admin/",
              "/login/",
              "/register/",
              "/cgi-bin/",
              "/private/",
              "/tmp/",
              "/backup/",
              "/print/",
              "/dev/",
              "/test/",
              "/*?sessionid=",
              "/*&sort=",
            ],
          },
        ],
      },
    },
  ],
};
