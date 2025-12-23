"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Conferences = () => {
	return (
		<div className="w-full px-4 lg:px-10 py-10 lg:py-10">
			<section className="flex flex-col lg:flex-row justify-between space-x-6">
				<motion.section
					className="w-full lg:w-1/2 flex flex-col space-y-4 mt-[0px] lg:mt-[130px]"
					initial={{ opacity: 0, y: 26 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.65, ease: "easeOut" }}
				>
					<h2 className="text-lg lg:text-5xl font-semibold tracking-normal lg:tracking-wide w-full lg:w-5/6">
						Conferences & Meetings for large, medium and smaller events
					</h2>

					<p className="text-xs lg:text-[16px] tracking-normal lg:tracking-wide  text-gray-500">
						Our hotel is equipped with venues for various event sizes and
						purposes, conference halls with high standard multimedia
						technology suitable for meetings and trainings.{" "}
						<span className="text-[#7B542F] font-semibold">150</span> Seats ,{" "}
						<span className="text-[#7B542F] font-semibold">3</span> Projection
						Screens ,{" "}
						<span className="text-[#7B542F] font-semibold">6mw </span> PA
						System (conferences) ,{" "}
						<span className="text-[#7B542F] font-semibold">100GBs </span>
						Lightning Fast Wifi
					</p>
					<div className="flex items-center gap-1 px-4 py-2 bg-[#7B542F] text-white w-max rounded-md text-xs lg:text-sm font-semibold  hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-90 cursor-pointer">
						<p className="">Book Now </p>
						<ChevronRight height={20} width={20} className="text-white" />
					</div>
				</motion.section>
				<motion.section
					className="hidden lg:flex w-full lg:w-1/2 rounded-lg space-x-0 lg:space-x-4"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="flex flex-col space-y-0 lg:space-y-4 mt-[70px] w-full">
						<div className="h-[200px] lg:h-[300px] w-[150px] lg:w-[300px] relative rounded-lg overflow-hidden">
							<Image
								src="/images/hotel1.jpg"
								alt="conference"
								fill
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="hidden lg:block h-[300px] w-[300px] relative rounded-lg overflow-hidden">
							<Image
								src="/images/hotel2.jpg"
								alt="conference"
								fill
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
					<div className="flex flex-col space-y-0 lg:space-y-4 w-full">
						<div className="h-[200px] lg:h-[300px] w-[150px] lg:w-[300px] relative rounded-lg overflow-hidden">
							<Image
								src="/images/hotel3.jpg"
								alt="conference"
								fill
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="hidden lg:block h-[300px] w-[300px] relative rounded-lg overflow-hidden">
							<Image
								src="/images/hotel4.jpg"
								alt="conference"
								fill
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</motion.section>
			</section>
		</div>
	);
};

export default Conferences;
