const path = require("path");

const slugify = str => {
  return str
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-0-9]/g, "");
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, _) => {
    graphql(`
      {
        allContentfulPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
              date(formatString: "DD.MM.YYYY")
              tags
              description {
                childMarkdownRemark {
                  html
                  excerpt
                  wordCount {
                    words
                    paragraphs
                  }
                }
              }
              photo {
                resize(height: 1600, quality: 80) {
                  src
                  base64
                  aspectRatio
                }
              }
              panelColor
            }
            next {
              id
              date(formatString: "DD.MM.YYYY")
            }
            previous {
              id
              date(formatString: "DD.MM.YYYY")
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges;

      const tags = posts.reduce((acc, { node }) => {
        node.tags.forEach(tag => {
          if (!acc[tag]) {
            acc[tag] = [];
          }
          acc[tag].push(node);
        });
        return acc;
      }, {});

      posts.forEach(({ next, previous, node }) => {
        createPage({
          path: `/outfit/${slugify(node.date)}`,
          component: path.resolve("./src/templates/Post/index.jsx"),
          context: {
            post: node,
            next: next ? `/outfit/${slugify(next.date)}` : null,
            prev: previous ? `/outfit/${slugify(previous.date)}` : null
          }
        });
      });

      Object.entries(tags).forEach(([tag, posts]) => {
        createPage({
          path: `/tag/${tag}`,
          component: path.resolve("./src/templates/Tag/index.jsx"),
          context: {
            tag,
            posts
          }
        });
      });

      resolve();
    });
  });
};
