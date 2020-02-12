/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "./Header"
import PostIndex from "./PostIndex"

import layoutStyles from "./layout.module.scss"



const Layout = ({ children, location }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
				}
			}
			file(relativePath: {
				regex: "/bg/"
			}) {
				childImageSharp {
					fluid(maxWidth: 1000) {
					# ...GatsbyImageSharpFluid_tracedSVG
					...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const imgHeight = location.pathname === `/` ? 200 : 100

	return (
		<>
			<Header />
			<div style={{
				overflow: `hidden`,
				height: imgHeight,
			}}>
				<Img fluid={data.file.childImageSharp.fluid} />
			</div>

			<main className={layoutStyles.container}>
				<div>
					{children}
				</div>
				<PostIndex />
			</main>

			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</>
	)
}


Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
	location: {},
}

export default Layout
