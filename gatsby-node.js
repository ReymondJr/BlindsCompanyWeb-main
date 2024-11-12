const path = require("path");
const fs = require("fs-extra");

async function createProductPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      allProductCategoriesJson {
        edges {
          node {
            products {
              title
              heroTitle
              slug
              subtitle
              description
              canShowDefaultExtraCopy
              extraCopy {
                title
                text
              }
              featuredImage {
                src {
                  childImageSharp {
                    gatsbyImageData(width: 1400)
                  }
                }
                alt
              }
              gallery {
                src {
                  childImageSharp {
                    gatsbyImageData(width: 600)
                  }
                  publicURL
                }
                alt
              }
              productCatalogs {
                img {
                  src {
                    childImageSharp {
                      gatsbyImageData(width: 400)
                    }
                  }
                  alt
                }
                name
                url
              }
              ctas {
                label
                url
              }
            }
          }
        }
      }
    }
  `);

  data.allProductCategoriesJson.edges.forEach(({ node }) => {
    node.products.forEach((product) => {
      actions.createPage({
        path: `/productos/${product.slug.toLowerCase()}`,
        component: path.resolve("./src/templates/Product.js"), // remember to add file extension
        context: {
          data: product,
        },
      });
    });
  });
}

async function createProjectPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      allProjectsListJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allProjectsListJson.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/proyectos/${node.slug}`,
      component: path.resolve("./src/templates/Project.js"),
      context: {
        slug: node.slug,
      },
    });
  });
}

async function createLandingPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      promoLandingPagesJson {
        products {
          language
          slug
          heroTitle
          titleContext
          heroBanner {
            childImageSharp {
              gatsbyImageData
            }
          }
          contactPrompt
          imageAlt
          content {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            callToAction
            description
          }
          gallery {
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  data.promoLandingPagesJson.products.forEach((product) => {
    actions.createPage({
      path: `/lp-${product.slug}`,
      component: path.resolve("./src/templates/PromoPage.jsx"),
      context: {
        data: product,
      },
    });
  });
}

async function createProductLandingPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      productLandingPagesJson {
        products {
          slug
          heroTitle
          heroBanner {
            childImageSharp {
              gatsbyImageData
            }
          }
          contactPrompt
          imageAlt
          content {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            callToAction
            description
          }
          gallery {
            path {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  data.productLandingPagesJson.products.forEach((product) => {
    actions.createPage({
      path: `/producto-${product.slug}`,
      component: path.resolve("./src/templates/ProductPage.jsx"),
      context: {
        data: product,
      },
    });
  });
}

async function createContactPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      promoContactPagesJson {
        contactPages {
          language
          slug
          imageAlt
          bannerImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          bannerTitle
          bannerSubtitle
          formTitle
          formText
          infoTitle
          infoText
        }
      }
    }
  `);

  data.promoContactPagesJson.contactPages.forEach((contactPage) => {
    actions.createPage({
      path: `/contacto-${contactPage.slug}`,
      component: path.resolve("./src/templates/ContactPage.jsx"),
      context: {
        data: contactPage,
      },
    });
  });
}

async function createFormPages(actions, graphql) {
  const { data } = await graphql(`
    query {
      promoFormPagesJson {
        forms {
          language
          slug
          imageAlt
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
        }
      }
    }
  `);

  data.promoFormPagesJson.forms.forEach((form) => {
    actions.createPage({
      path: `/formulario-${form.slug}`,
      component: path.resolve("./src/templates/FormPage.jsx"),
      context: {
        data: form,
      },
    });
  });
}

exports.createPages = async function ({ actions, graphql }) {
  //await createProductPages(actions, graphql);
  await createProductLandingPages(actions, graphql);
  await createProjectPages(actions, graphql);
  await createLandingPages(actions, graphql);
  await createContactPages(actions, graphql);
  await createFormPages(actions, graphql);
};
