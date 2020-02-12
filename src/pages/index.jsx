import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Listing from "../components/Listing"

const IndexPage = ({location}) => (
	<Layout location={location}>
		<SEO title="Home" />

		<h1>Home Page</h1>
		<p>"Our self-driving cars are being hit surprisingly often by other drivers who are distracted and not paying attention to the road," wrote Chris Urmson, director of Google's self-driving car project, in the blog post. "The clear theme is human error and inattention" in those incidents. Google is testing a fleet of 23 specially equipped Lexus prototypes, and said it has logged more than 1 million test miles. Last month, the company began testing tiny, bubble-shaped self-driving prototype vehicles of its own design on public roads around Mountain View.</p>

		<Link to="/about">Go back to the "About" page</Link>

		<p>As part of the plan to test actual driving emissions, the European Commission intends to phase in over two further years enforcement of the current legal limit on NOx of 80 milligrams a kilometer, an EU official familiar with the matter said last week. Between September 2017 and September 2019, real-driving emissions would be allowed under the commission proposal to exceed permissible discharges in laboratories by as much as 60 percent, according to the official, who spoke on the condition of anonymity.</p>

		<p>Last year’s General Motors Co. ignition-switch fiasco helped push the total number of recalls in the U.S. to 64 million cars, more than double the previous record. Then Honda Motor Co. paid $70 million for failing to properly report death, injury and warranty data to U.S. regulators. This month, Takata Corp., the maker of faulty airbags linked to seven deaths and 100 injuries in the U.S., agreed to a civil penalty that could reach $200 million, an all-time-high. That was the third time this year a misbehaving company paid a record-breaking fine to auto-safety regulators. Trucking fatalities are also increasing.</p>

		<Listing />
	</Layout>
)

export default IndexPage
