// Implement Gatsby's Node APIs in this file.
// See: https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`)


// Create blog posts based on .md files in 'src/posts'
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {

		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								slug
							}
						}
					}
				}
			}
		`).then(results => {

			results.data.allMarkdownRemark.edges.forEach(({node}) => {
				createPage({
					path: `/posts${node.frontmatter.slug}`,
					component: path.resolve(`./src/components/PostLayout.jsx`),
					context: {
						slug: node.frontmatter.slug,
					},
				})
			})
			resolve()

		})
	})
}
