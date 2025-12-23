"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	// Handle click outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(event.target as Node) &&
				isMenuOpen
			) {
				closeMenu();
			}
		};

		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	const linkClass = (path: string) =>
		`text-sm font-medium transition-all duration-300 ${
			pathname === path ? "text-[#7B542F]" : "hover:text-[#7B542F]"
		}`;

	return (
		<>
			<div
				ref={headerRef}
				className="border-b border-gray-200 bg-white top-0 sticky z-50"
			>
				<div className="flex justify-between items-center px-4 lg:px-10 py-4">
					<div className="">
						<p className="text-md lg:text-2xl font-bold">Molavikhaus Hotel</p>
					</div>
					<div className="hidden lg:flex items-center gap-8">
						<Link
							href="/"
							className={linkClass("/")}
						>
							Home
						</Link>
						<Link
							href="/about"
							className={linkClass("/about")}
						>
							About
						</Link>
						<Link
							href="/contact"
							className={linkClass("/contact")}
						>
							Contact
						</Link>
						<Link
							href="/"
							className="text-sm text-white border border-gray-200 rounded-md px-4 py-2 bg-[#7B542F] hover:text-white transition-all duration-300 hover:bg-[#7B542F]/90  active:scale-90"
						>
							Book Now
						</Link>
					</div>
					<div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
						{isMenuOpen ? (
							<X className="w-[20px] h-[20px]" />
						) : (
							<Menu className="w-[20px] h-[20px]" />
						)}
					</div>
				</div>

				{/* Mobile Menu Dropdown */}
				<div
					className={`absolute top-full left-0 right-0 bg-white border-b border-gray-200 z-40 lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMenuOpen
							? "max-h-[30vh] w-full opacity-100 transition-all duration-300 ease-in-out"
							: "max-h-0 opacity-0 transition-all duration-300 ease-in-out"
					}`}
				>
					{isMenuOpen && (
						<div ref={menuRef} className="flex flex-col px-4 py-4 gap-4">
							{/* Menu Items */}
							<nav className="flex flex-col gap-2">
								<Link
									href="/"
									onClick={closeMenu}
									className={`text-xs font-medium transition-colors duration-300 py-2 ${
										pathname === "/" ? "text-[#7B542F]" : "hover:text-[#7B542F]"
									}`}
								>
									Home
								</Link>
								<Link
									href="/about"
									onClick={closeMenu}
									className={`text-xs font-medium transition-colors duration-300 py-2 ${
										pathname === "/about"
											? "text-[#7B542F]"
											: "hover:text-[#7B542F]"
									}`}
								>
									About
								</Link>
								<Link
									href="/contact"
									onClick={closeMenu}
									className={`text-xs font-medium transition-colors duration-300 py-2 ${
										pathname === "/contact"
											? "text-[#7B542F]"
											: "hover:text-[#7B542F]"
									}`}
								>
									Contact
								</Link>
								<Link
									href="/"
									onClick={closeMenu}
									className="text-xs text-white border border-gray-200 rounded-md px-4 py-2 bg-[#7B542F] hover:bg-[#7B542F]/90 w-max transition-all duration-300 active:scale-95"
								>
									Book Now
								</Link>
							</nav>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
