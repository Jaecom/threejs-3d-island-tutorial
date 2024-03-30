import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex text-lg gap-7 font-medium w-full">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/projects">Projects</Link>
		</nav>
	);
};

export default Navbar;
