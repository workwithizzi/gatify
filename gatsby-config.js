// Site Metadata | Gatsby plugin options | Google Analytics

module.exports = {
	siteMetadata: {
		title: `Gatify`,
		description: `This is a description!`,
		author: `Izzi`,
		siteUrl: `https://replace-this-with-actual-url.com/`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sass`,
			// options: {
			// 	includePaths: [`src/styles`],
			// },
		},


		// --- gatsby-source-filesystem
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`,
				ignore: [`**/.*`], // ignore files starting with a dot
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
				ignore: [`**/.*`], // ignore files starting with a dot
			},
		},
		// gatsby-source-filesystem ---


		// {
		//   resolve: `gatsby-plugin-google-analytics`,
		//   options: {
		//     // The property ID; the tracking code won't be generated without it
		//     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
		//     // Defines where to place the tracking script - `true` in the head and `false` in the body
		//     head: false,
		//     // Setting this parameter is optional
		//     anonymize: true,
		//     // Setting this parameter is also optional
		//     respectDNT: true,
		//     // Avoids sending pageview hits from custom paths
		//     exclude: ["/preview/**", "/do-not-track/me/too/"],
		//     // Delays sending pageview hits on route update (in milliseconds)
		//     pageTransitionDelay: 0,
		//     // Enables Google Optimize using your container Id
		//     optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
		//     // Enables Google Optimize Experiment ID
		//     experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
		//     // Set Variation ID. 0 for original 1,2,3....
		//     variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
		//     // Any additional optional fields
		//     sampleRate: 5,
		//     siteSpeedSampleRate: 10,
		//     cookieDomain: "example.com",
		//   },
		// },
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-boilerplate`,
				short_name: `boilerplate`,
				start_url: `/`,
				background_color: `#333333`,
				theme_color: `#333333`,
				display: `minimal-ui`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`, // Configure this plugin after 'plugin-manifest'

		{
			// Used for markdown
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-plugin-react-svg`,
			options: {
				rule: {
					include: /assets/, // See below to configure properly
				},
			},
		},
	],
}
