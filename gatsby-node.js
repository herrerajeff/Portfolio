const path = require('path');
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/post.js');
    const projectTemplate = path.resolve('src/templates/projects.js');
    const categoryTemplate = path.resolve('src/templates/category.js');
    resolve(
      graphql(`
        {
          post: allContentfulBlogPost {
            edges {
              node {
                id
                slug
                category
              }
            }
          }
          project: allContentfulProject(sort: { fields: [order], order: ASC }) {
            edges {
              previous {
                slug
                title
              }
              next {
                slug
                title
              }
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const post = result.data.post.edges;

        post.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });

        let categories = [];

        _.each(post, edge => {
          if (_.get(edge, 'node.category')) {
            categories = categories.concat(edge.node.category);
          }
        });

        categories = _.uniq(categories);

        categories.forEach(category => {
          createPage({
            path: `/${_.kebabCase(category)}`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        });

        const project = result.data.project.edges;

        project.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: projectTemplate,
            context: {
              slug: edge.node.slug,
              prev: edge.previous,
              next: edge.next,
            },
          });
        });
      })
    );
  });
};
