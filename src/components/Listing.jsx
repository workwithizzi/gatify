import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import listingStyles from "./listing.module.scss"


const _LISTING_QUERY = graphql`
	query BlogPostListing {
		allMarkdownRemark(limit: 5, sort: {
			order: DESC,
			fields: [frontmatter___date]
		}) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						slug
					}
				}
			}
		}
	}
`


const Listing = () => {
	const data = useStaticQuery(_LISTING_QUERY)

	return (
		<>
			{data.allMarkdownRemark.edges.map(edge => (
				<article className={listingStyles.article} key={edge.node.frontmatter.slug}>
					<Link to={`/posts${edge.node.frontmatter.slug}`}>
						<h2>{edge.node.frontmatter.title}</h2>
					</Link>
					<p>{edge.node.frontmatter.date}</p>
					<p>{edge.node.excerpt}</p>
					<Link className={listingStyles.readMore} to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
				</article>
			))}
		</>
	)
}


export default Listing
