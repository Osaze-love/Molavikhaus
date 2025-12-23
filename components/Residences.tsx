"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const residences = [
	{
		id: 1,
		name: "Family Suite Room",
		description: "120m, 2 Bedrooms",
		image: "/images/hotel1.jpg",
	},
	{
		id: 2,
		name: "Single Suite Room",
		description: "70m, 1 Bedroom",
		image: "/images/hotel2.jpg",
	},
	{
		id: 3,
		name: "Double Suite Room",
		description: "120m, 2 Bedrooms",
		image: "/images/hotel3.jpg",
	},
	{
		id: 4,
		name: "Luxury Suite Room",
		description: "120m, 3 Bedrooms",
		image: "/images/hotel4.jpg",
	},
];

const Residences = () => {
	return (
		<div className="w-full bg-[#a4703f] px-4 lg:px-0 py-10 lg:py-20">
			<motion.section
				className="w-full flex flex-col items-center justify-center space-y-2 lg:space-y-4"
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<h2 className="text-lg lg:text-5xl text-white font-medium  items-center justify-center">
					Choose Your Room
				</h2>
				<p className="text-white text-xs lg:text-base tracking-normal lg:tracking-wide w-full lg:w-2/4 text-center mx-auto">
					Explore a variety of rooms tailored for your needs. Whether you're
					travelling solo or with family, we have a room that's perfect for you.
				</p>
			</motion.section>
			<motion.section
				className="w-full mt-12 hidden lg:block"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<Swiper
					spaceBetween={20}
					slidesPerView={3}
					loop={true}
					modules={[Autoplay]}
					autoplay={{
						delay: 1000,
					}}
					className="w-full"
				>
					{residences.map((item, index) => (
						<SwiperSlide key={item.id}>
							<div className="h-[200px] lg:h-[300px] w-full lg:w-[450px] rounded-lg relative overflow-hidden">
								<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
								<div className="absolute bottom-0 left-0 z-20 w-full text-center">
									<div className="mx-auto w-[100%] bg-black/40 px-4 py-3 border border-white/10">
										<h2 className="text-white text-sm lg:text-lg font-semibold">
											{item.name}
										</h2>
										<p className="text-white text-xs lg:text-sm">
											{item.description}
										</p>
									</div>
								</div>
								<div>
									<Image
										src={item.image}
										alt="residence"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.section>

			<motion.section
				className="w-full mt-6 lg:mt-12 block lg:hidden"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
			>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					loop={true}
					modules={[Autoplay]}
					autoplay={{
						delay: 1000,
					}}
					className="w-full"
				>
					{residences.map((item, index) => (
						<SwiperSlide key={item.id}>
							<div className="h-[200px] lg:h-[300px] w-full lg:w-[450px] rounded-lg relative overflow-hidden">
								<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none" />
								<div className="absolute bottom-0 left-0 z-20 w-full text-center">
									<div className="mx-auto w-[100%] bg-black/40 px-4 py-3 border border-white/10">
										<h2 className="text-white text-xs lg:text-lg font-semibold">
											{item.name}
										</h2>
										<p className="text-white text-[10px] lg:text-sm">
											{item.description}
										</p>
									</div>
								</div>
								<div>
									<Image
										src={item.image}
										alt="residence"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.section>

			<motion.section
				className="flex items-center justify-center mt-6 lg:mt-[50px]"
				initial={{ opacity: 0, y: 18 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<button className="px-6 py-2 bg-[none] border border-white text-white rounded-md w-max text-center text-xs lg:text-base font-semibold mx-auto  transition-all duration-300 active:scale-90">
					Explore Suites
				</button>
			</motion.section>
		</div>
	);
};

export default Residences;
