import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.svg"


const Header = () => (
	<header style={{ height: `200px` }}>

		{/* Logo/Title */}
		<h1 style={{ margin: 0 }}>
			<Link to="/" >
				Site Title
				<img src={ logo } alt="Site-Logo" />
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
