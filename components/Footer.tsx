import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="w-full bg-[#7B542F] text-white px-4 lg:px-10 pt-10 pb-20 mt-20">
			<div className="w-full flex flex-col lg:flex-row justify-evenly items-start gap-6 lg:gap-10">
				<div className="flex flex-col gap-2 w-full lg:w-1/3">
					<h2 className="text-lg lg:text-2xl font-bold mb-2">
						Molavikhaus Hotel
					</h2>
					<p className="text-gray-300 text-xs lg:text-sm w-3/4">
						Molavik Haus & Suites, Adjacent Lapeleke Bus stop, Itori Eweoro,
						Along Lagos-Abeokuta Express Way, Ogun State.
					</p>
				</div>
				<div className="flex flex-col  gap-2 w-1/3">
					<h2 className="text-lg lg:text-2xl font-bold mb-2">Company</h2>
					<ul className="flex flex-col gap-2">
						<li className="text-gray-300 text-xs lg:text-sm">
							<Link href="/">Home</Link>
						</li>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="text-gray-300 text-xs lg:text-sm">
							<Link href="/">About</Link>
						</li>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="text-gray-300 text-xs lg:text-sm">
							<Link href="/">Contact</Link>
						</li>
					</ul>
					<ul className="flex flex-col gap-2">
						<li className="text-gray-300 text-xs lg:text-sm">
							<Link href="/">Book</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-2 w-1/3">
					<h2 className="text-lg lg:text-2xl font-bold mb-2">Socials</h2>
					<ul className="flex items-center gap-8">
						<li className="text-gray-300 text-xs lg:text-sm">
							<Facebook className="w-4 h-4" />
						</li>
						<li className="text-gray-300 text-xs lg:text-sm">
							<Instagram className="w-4 h-4" />
						</li>
						<li className="text-gray-300 text-xs lg:text-sm">
							<Twitter className="w-4 h-4" />
						</li>
						<li className="text-gray-300 text-xs lg:text-sm">
							<Mail className="w-4 h-4" />
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full flex justify-center items-center mt-10 lg:mt-16">
				<p className="text-gray-300 text-xs lg:text-md text-center">
					© 2025 Molavikhaus Hotel. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
