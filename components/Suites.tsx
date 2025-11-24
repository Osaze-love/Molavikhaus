import Image from "next/image";
import React from "react";

const suites = [
	{
		id: 1,
		name: "Standard",
		description: "Max of two people",
		image: "/images/hotel1.jpg",
	},
	{
		id: 2,
		name: "Deluxe",
		description: "Max of four people",
		image: "/images/hotel2.jpg",
	},
	{
		id: 3,
		name: "Super Deluxe",
		description: "Max of six people",
		image: "/images/hotel3.jpg",
	},
	{
		id: 4,
		name: "Executive Deluxe",
		description: "Max of eight people",
		image: "/images/hotel4.jpg",
	},
	{
		id: 5,
		name: "Luxury Suite",
		description: "Max of ten people",
		image: "/images/hotel2.jpg",
	},
	{
		id: 6,
		name: "Suite",
		description: "Max of twelve people",
		image: "/images/hotel3.jpg",
	},
];

const Suites = () => {
	return (
		<div className="w-full px-4 lg:px-20 ">
			<h2 className="text-xl lg:text-5xl font-medium text-center ">
				Residences & Suites
			</h2>
			<section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 mt-8 lg:mt-20">
				{suites.map((suite, index) => (
					<div
						key={index}
						className="flex flex-col gap-4 border cursor-pointer hover:shadow-lg hover:shadow-[#7B542F] lg:hover:scale-105 transition-all duration-300 border-gray-200 rounded-lg "
					>
						<div className="h-[200px] lg:h-[250px] w-full lg:w-[400px] relative rounded-tr-lg rounded-tl-lg overflow-hidden">
							<Image
								src={suite.image}
								alt="suite"
								fill
								className="object-cover"
							/>
						</div>
						<div className="flex flex-col gap-1 lg:gap-2 p-2 lg:p-4">
							<h2 className="text-sm lg:text-lg font-medium">
								{suite.name}
							</h2>
							<div className="flex items-center gap-2">
								<div className="w-1 h-1 bg-[#7B542F] rounded-full"></div>
								<p className="text-gray-500 text-xs">
									{suite.description}
								</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1 h-1 bg-[#7B542F] rounded-full"></div>
								<p className="text-gray-500 text-xs">
									Complimentary breakfast
								</p>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-1 h-1 bg-[#7B542F] rounded-full"></div>
								<p className="text-gray-500 text-xs">
									Complimentary swimming
								</p>
							</div>
							<button className="px-4 py-2 mt-2 bg-[#7B542F] text-white rounded-md w-max text-center text-xs font-medium hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-90">
								Book Reservation
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Suites;
