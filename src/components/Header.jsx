import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-Orange-400 h-[70px] fixed w-full font-Montserrat font-medium md:h-[100px] flex justify-between items-center shadow-md py-2 px-3 md:py-7">
			<span className="font-Vigilance text-4xl md:text-5xl text-White tracking-wide underline">
				TechBlog
			</span>
			<Link to={"/nova-postagem"}>
				<button className="hover:scale-105 hover:bg-White hover:bg-opacity-10 transition-all border-2 text-White shadow-md border-White p-1 w-[100%] md:w-[330px] rounded-lg">
					Nova Postagem
				</button>
			</Link>
		</header>
	);
};

export default Header;
