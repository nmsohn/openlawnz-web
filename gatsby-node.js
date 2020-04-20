const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `NewsJson`) {
    const slug = createFilePath({ node, getNode, basePath: `news` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === `MicrositesJson`) {
    const slug = createFilePath({ node, getNode, basePath: `microsites` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({graphql, actions: { createPage } }) => {

  const result = await graphql(`
    query PagesQuery {
      allNewsJson {
        edges {
          node {
            fields {
              slug
            }
            date
            content_html
            title
            summary
            image_url
            image_alt
          }
        }
      }
      allMicrositesJson {
        edges {
          node {
            fields {
              slug
            }
            title
            description
            content {
              title
              paragraphs {
                title
                content_html
              }
            }
          }
        }
      }
    }
  `)

  const newsData = result.data.allNewsJson.edges // organises and sorts news items
    .map(n => n.node)
    .map(n => ({ ...n, slug: n.fields.slug }))
    .sort((a,b) => {
      return +new Date(b.date) - +new Date(a.date)
    })
  
  const micrositeData = result.data.allMicrositesJson.edges 
    .map(n => n.node)
    .map(n => ({ ...n, slug: n.fields.slug }))

  createPage({
    path: `/news`,
    component: require.resolve("./src/templates/news.js"),
    context: {
      news: newsData,
    },
  })

  //generates static pages for each news article based on template
  newsData.forEach(n => {
    createPage({
      path: '/news' + n.slug,
      component: require.resolve("./src/templates/single-news.js"),
      context: n,
    })
  })

  //generates static pages for each microsite based on template
  micrositeData.forEach(n => {
    createPage( {
      path: '/get-empowered' + n.slug,
      component: require.resolve("./src/templates/microsite.js"),
      context: n,
    })
  })

}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/case/)) {
    page.matchPath = "/case/*"

    createPage(page)
  }
}

