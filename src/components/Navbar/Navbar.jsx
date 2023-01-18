import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {TfiClose} from 'react-icons/tfi'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/images/logo.svg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<Link to='/'>
			<img src={logo} alt="Shestel Logo" />
			</Link>
			<nav ref={navRef}>
				<Link to='/'>Home</Link>
				<Link to='/tvshows'>Tv Shows & Movies</Link>
				<Link to='/blog'>Blog</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<TfiClose/>
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<HiOutlineMenuAlt4 />
			</button>
		</header>
	);
}

export default Navbar;