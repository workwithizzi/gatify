// Archive component that queries for data
// with Gatsby's useStaticQuery component
// See: https://www.gatsbyjs.org/docs/use-static-query/


import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import archiveStyles from "./archive.module.scss"


const _POSTS_QUERY = graphql`
	query {
		allMarkdownRemark(limit: 5, sort: {
			order: DESC,
			fields: [frontmatter___date]
		}) {
			edges {
				node {
					frontmatter {
						title
						slug
					}
				}
			}
		}
	}
`


const PostIndex = () => {
	const data = useStaticQuery(_POSTS_QUERY)

	return (
		<>
			<aside>
				<h3>Posts Index</h3>
				<ul className={archiveStyles.ul}>
					{data.allMarkdownRemark.edges.map(edge => (
						<li key={edge.node.frontmatter.slug}>
							<Link to={`/posts${edge.node.frontmatter.slug}`}>
								{edge.node.frontmatter.title}
							</Link>
						</li>
					))}
				</ul>

			</aside>
		</>
	)
}


export default PostIndex
