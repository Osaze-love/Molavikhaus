"use client";

import { motion } from "framer-motion";
import { CarFront, HandHelping, MapPinHouse, TvMinimal } from "lucide-react";
import React from "react";

const Offers = () => {
	return (
		<div className="w-full py-10 lg:py-40">
			<section className=" bg-[#f8f0e8] mx-4 lg:mx-40 rounded-lg flex flex-col lg:flex-row items-start  lg:items-center justify-between px-4 lg:px-10 py-10 lg:py-10">
				<motion.div
					className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-1 lg:gap-2"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<h2 className="text-lg lg:text-4xl font-medium">What We Offer</h2>
					<p className="text-gray-500 text-center lg:text-left text-xs lg:text-sm w-full lg:w-3/4">
						From personalized service to luxurious amenities, we ensure every
						stay is unforgettable.
					</p>
					<button className="px-4 py-2 mt-2 lg:mt-4 bg-[#7B542F] text-white rounded-md w-max text-center text-xs lg:text-sm font-medium hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-90">
						Book Now
					</button>
				</motion.div>

				<section className="flex flex-col gap-2 lg:gap-8 mt-10 lg:mt-0">
					<div className="flex items-center flex-col lg:flex-row gap-2 lg:gap-4">
						<motion.div
							className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex border bg-white border-gray-200 rounded-lg p-4 flex-col h-[170px] w-full lg:w-[250px] gap-2 "
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.55, ease: "easeOut" }}
						>
							<div className="bg-gray-200 group-hover:bg-[#f6efe8] w-[30px] h-[30px] relative rounded-full p-2 transition-colors duration-300">
								<MapPinHouse className="text-black group-hover:text-[#7B542F] w-[20px] h-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
							</div>

							<h2 className="text-sm lg:text-base font-medium">
								Luxury rooms
							</h2>
							<p className="text-gray-500 text-xs">
								Our visitor expect nothing less but luxurious stay and
								premium feel.
							</p>
						</motion.div>
						<motion.div
							className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex border bg-white border-gray-200 rounded-lg p-4 flex-col h-[170px] w-full lg:w-[250px] gap-2 "
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
						>
							<div className="bg-gray-200 group-hover:bg-[#f6efe8] w-[30px] h-[30px] relative rounded-full p-2 transition-colors duration-300">
								<TvMinimal className="text-black group-hover:text-[#7B542F] w-[20px] h-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
							</div>
							<h2 className="text-sm lg:text-base font-medium">
								TV & Wi-Fi
							</h2>
							<p className="text-gray-500 text-xs">
								All the contemporary technical amenities are included in
								every room or suite
							</p>
						</motion.div>
					</div>
					<div className="flex  items-center flex-col lg:flex-row ml-0 lg:-ml-20 gap-2 lg:gap-4">
						<motion.div
							className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex border bg-white border-gray-200 rounded-lg p-4 flex-col h-[170px] w-full lg:w-[250px] gap-2 "
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.55, ease: "easeOut" }}
						>
							<div className="bg-gray-200 group-hover:bg-[#f6efe8] w-[30px] h-[30px] relative rounded-full p-2 transition-colors duration-300">
								<CarFront className="text-black group-hover:text-[#7B542F] w-[20px] h-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
							</div>

							<h2 className="text-sm lg:text-base font-medium">Garage</h2>
							<p className="text-gray-500 text-xs">
								Reserved parking place or garage place is standard in our
								offer for every guest.
							</p>
						</motion.div>
						<motion.div
							className="group hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer flex border bg-white border-gray-200 rounded-lg p-4 flex-col h-[170px] w-full lg:w-[250px] gap-2 "
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
						>
							<div className="bg-gray-200 group-hover:bg-[#f6efe8] w-[30px] h-[30px] relative rounded-full p-2 transition-colors duration-300">
								<HandHelping className="text-black group-hover:text-[#7B542F] w-[20px] h-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
							</div>
							<h2 className="text-sm lg:text-base font-medium">
								Room Service
							</h2>
							<p className="text-gray-500 text-xs">
								Most demanding guests will find our room service to be
								"top of the notch" and a bit more
							</p>
						</motion.div>
					</div>
				</section>
			</section>
		</div>
	);
};

export default Offers;
