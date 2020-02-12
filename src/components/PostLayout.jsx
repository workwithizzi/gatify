/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"

// Static Query = Can be used anywhere. Does not accept parameters/variables. Can't use context
// Page Query = Must be used on pages


export default class PostLayout extends Component {
	render() {
		const { markdownRemark } = this.props.data
		const { location } = this.props

		return (
			<Layout location={location}>
				<h1>{markdownRemark.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{
					__html: markdownRemark.html,
				}} />
			</Layout>
		)
	}
}


export const query = graphql`
	query PostQuery($slug: String!) {
		markdownRemark(frontmatter: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				title
				date
				slug
			}
		}
	}
`
