"use client";

import { motion } from "framer-motion";
import React from "react";
import Typewriter from "./Typewriter";
import { Calendar, ChevronDown, User, Warehouse } from "lucide-react";

const Banner = () => {
	return (
		<main
			className="flex min-h-[60vh] lg:min-h-[90vh] bg-cover bg-center bg-no-repeat flex-col items-start lg:items-center justify-start lg:justify-center p-4 lg:p-24 bg-blend-overlay bg-black/70"
			style={{ backgroundImage: "url('/images/bg_image.jpg')" }}
		>
			<motion.div
				className="z-10 max-w-5xl w-full items-start lg:items-center justify-start lg:justify-between text-sm flex flex-col gap-1 lg:gap-6 "
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<h1 className=" text-3xl lg:text-6xl text-white tracking-widest font-bold text-left lg:text-center w-full lg:w-2/4 mx-0 lg:mx-auto mt-6 lg:mt-0">
					MOLAVIK HAUS{" "}
					<span className=" lg:inline-block hidden">
						<Typewriter
							strings={["HOTEL"]}
							autoStart={true}
							loop={true}
							delay={2000}
							cursor="|"
							typingSpeed={400}
							deletingSpeed={200}
						/>
					</span>
					<span className="lg:hidden inline-block">HOTEL</span>
				</h1>
				<p className="text-left lg:text-center  text-white tracking-normal lg:tracking-wider text-sm lg:text-lg font-medium w-3/4 mx-0 lg:mx-auto leading-6">
					Business & Premium Residences and Suites
				</p>
				<button className="px-4 lg:px-6 py-2 bg-[#7B542F] text-white rounded-md w-max text-left lg:text-center text-xs lg:text-lg font-medium  lg:mx-auto mx-0 hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-90">
					Book Now
				</button>

				<section className="lg:hidden border shadow-lg border-gray-200 w-full rounded-lg py-4 px-4 flex flex-col gap-8 items-center z-10 relative bg-white mt-4">
					<div className="flex items-center justify-between w-full">
						<section className="w-1/2 flex justify-between px-3 items-center border-r border-r-black">
							<div className="flex items-center gap-2">
								<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
									<Warehouse
										height={15}
										width={15}
										className="text-[#7B542F]"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-xs font-semibold">Room</p>
									<p className="text-xs text-[#7B542F]">Pine Log</p>
								</div>
							</div>
							<ChevronDown height={20} width={20} className="" />
						</section>
						<section className="w-1/2 flex justify-between px-3 items-center ">
							<div className="flex items-center gap-2">
								<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
									<Calendar
										height={15}
										width={15}
										className="text-[#7B542F]"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-xs font-semibold">Check In</p>
									<p className="text-xs text-[#7B542F]">20 Mar 2025</p>
								</div>
							</div>
							<ChevronDown height={20} width={20} className="" />
						</section>
					</div>
					<div className="flex items-center justify-between w-full">
						<section className="w-1/2 flex justify-between px-3 items-center border-r border-r-black">
							<div className="flex items-center gap-2">
								<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
									<Calendar
										height={15}
										width={15}
										className="text-[#7B542F]"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-xs font-semibold">Check Out</p>
									<p className="text-xs text-[#7B542F]">30 Mar 2025</p>
								</div>
							</div>
							<ChevronDown height={20} width={20} className="" />
						</section>
						<section className="w-1/2 flex justify-between px-3 items-center  ">
							<div className="flex items-center gap-2">
								<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
									<User
										height={15}
										width={15}
										className="text-[#7B542F]"
									/>
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-xs font-semibold">Guests</p>
									<p className="text-xs text-[#7B542F]">2 Adults</p>
								</div>
							</div>
							<ChevronDown height={20} width={20} className="" />
						</section>
					</div>

					<section className="w-full flex items-center justify-center">
						<button className="px-4 py-2 bg-[black] text-white rounded-md w-full text-center text-xs font-semibold mx-auto hover:bg-[black]/90 transition-all duration-300 active:scale-90">
							Check Availability
						</button>
					</section>
				</section>
			</motion.div>
		</main>
	);
};

export default Banner;
