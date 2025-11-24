import { Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
	return (
		<div className="w-full px-4 lg:px-10 py-20 lg:py-40">
			<h2 className="text-xl lg:text-5xl font-medium text-center">Happy Clients</h2>
			<div className="hidden lg:block">
				<Marquee
					className="mt-10 lg:mt-20"
					pauseOnHover={true}
					gradient={true}
					speed={100}
				>
					{[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
						<div
							key={index}
							className="border border-gray-200 bg-[#f5ebe1] rounded-lg p-4 flex flex-col h-[250px] lg:h-[300px] w-[300px] lg:w-[400px] relative mr-4"
						>
							<div className="h-[40px] w-[40px] bg-[#ebe5df] rounded-full flex items-center justify-center">
								<Quote className="w-4 h-4 text-[#7B542F]" />
							</div>
							<p className="text-gray-500 text-sm mt-4 flex-1">
								"I had a great experience at Molavikhaus Hotel. The staff
								was friendly and the room was clean."
							</p>

							<div className="flex flex-col gap-2 mt-auto">
								<div className="flex items-center gap-2">
									<div className="h-[24px] w-[24px] relative rounded-full overflow-hidden">
										<Image
											src="/images/face.jpg"
											alt="profile"
											fill
											className="object-cover"
										/>
									</div>
									<p className="text-sm font-medium">Sarah Johnson</p>
								</div>
								<p className="text-gray-500 text-sm">London, UK</p>
							</div>
						</div>
					))}
				</Marquee>
			</div>
			<div className="block lg:hidden">
				<Marquee className="mt-10 lg:mt-20 block lg:hidden" speed={100}>
					{[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
						<div
							key={index}
							className="border border-gray-200 bg-[#f5ebe1] rounded-lg p-4 flex flex-col h-[250px] lg:h-[300px] w-[300px] lg:w-[400px] relative mr-4"
						>
							<div className="h-[40px] w-[40px] bg-[#ebe5df] rounded-full flex items-center justify-center">
								<Quote className="w-4 h-4 text-[#7B542F]" />
							</div>
							<p className="text-gray-500 text-sm mt-4 flex-1">
								"I had a great experience at Molavikhaus Hotel. The staff
								was friendly and the room was clean."
							</p>

							<div className="flex flex-col gap-2 mt-auto">
								<div className="flex items-center gap-2">
									<div className="h-[24px] w-[24px] relative rounded-full overflow-hidden">
										<Image
											src="/images/face.jpg"
											alt="profile"
											fill
											className="object-cover"
										/>
									</div>
									<p className="text-sm font-medium">Sarah Johnson</p>
								</div>
								<p className="text-gray-500 text-sm">London, UK</p>
							</div>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default Testimonials;
