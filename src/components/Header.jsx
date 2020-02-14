import React from "react"
import { Link } from "gatsby"

import NetlifyCMSLogo from "../assets/netlify_cms_logo.svg"

const Header = () => (
	<header style={{ height: `200px` }}>

		{/* Logo/Title */}
		<h1 style={{ margin: 0 }}>
			<Link to="/">
				Gatify
				<NetlifyCMSLogo style={{ height: `60px`, width: `60px` }} />
			</Link>
		</h1>

		<nav>
			<ul>
				<Link to="/about">About</Link>
				<Link to="/about">About</Link>
			</ul>
		</nav>

	</header>
)


export default Header
