"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, User, Warehouse } from "lucide-react";
import React from "react";

const QuickBook = () => {
	return (
		<div className="hidden lg:block w-full px-10 py-10 mt-[-100px]">
			<motion.section
				className="border shadow-lg border-gray-200 rounded-lg p-8 flex items-center z-10 relative bg-white"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<section className="w-1/5 flex justify-between px-3 items-center border-r border-r-black">
					<div className="flex items-center gap-2">
						<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
							<Warehouse
								height={20}
								width={20}
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
				<section className="w-1/5 flex justify-between px-3 items-center border-r border-r-black">
					<div className="flex items-center gap-2">
						<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
							<Calendar height={20} width={20} className="text-[#7B542F]" />
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-xs font-semibold">Check In</p>
							<p className="text-xs text-[#7B542F]">20 Mar 2025</p>
						</div>
					</div>
					<ChevronDown height={20} width={20} className="" />
				</section>
				<section className="w-1/5 flex justify-between px-3 items-center border-r border-r-black">
					<div className="flex items-center gap-2">
						<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
							<Calendar height={20} width={20} className="text-[#7B542F]" />
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-xs font-semibold">Check Out</p>
							<p className="text-xs text-[#7B542F]">30 Mar 2025</p>
						</div>
					</div>
					<ChevronDown height={20} width={20} className="" />
				</section>
				<section className="w-1/5 flex justify-between px-3 items-center border-r border-r-black">
					<div className="flex items-center gap-2">
						<div className="w-[30px] h-[30px] bg-[#f2e1d1] rounded-full flex items-center justify-center">
							<User height={20} width={20} className="text-[#7B542F]" />
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-xs font-semibold">Guests</p>
							<p className="text-xs text-[#7B542F]">2 Adults</p>
						</div>
					</div>
					<ChevronDown height={20} width={20} className="" />
				</section>

				<section className="w-1/5 flex items-center justify-center">
					<button className="px-4 py-2 bg-[black] text-white rounded-md w-max text-center text-sm font-semibold mx-auto hover:bg-[black]/90 transition-all duration-300 active:scale-90">
						Check Availability
					</button>
				</section>
			</motion.section>
		</div>
	);
};

export default QuickBook;
