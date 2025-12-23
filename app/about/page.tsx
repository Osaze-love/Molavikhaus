"use client";

import { motion } from "framer-motion";
import React from "react";

const AboutPage = () => {
	const fade = {
		initial: { opacity: 0, y: 32 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.2 },
		transition: { duration: 0.65, ease: "easeOut" as const },
	};

	return (
		<div className="flex flex-col">
			<motion.section
				className="min-h-[55vh] lg:min-h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center px-4 lg:px-16 py-16 lg:py-28"
				style={{ backgroundImage: "url('/images/hotel3.jpg')" }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div className="absolute inset-0 bg-black/60" />
				<div className="relative z-10 max-w-5xl text-white space-y-4">
					<p className="text-xs lg:text-sm uppercase tracking-[0.25em] text-[#f2e1d1]">
						About Molavik Haus
					</p>
					<h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
						Where crafted hospitality meets warm, modern living.
					</h1>
					<p className="text-sm lg:text-base max-w-3xl leading-relaxed text-white/90">
						Our team curates spaces that feel intentional—pairing soulful
						design, comfort-focused suites, and attentive service that
						remembers the details of your stay.
					</p>
					<div className="flex flex-wrap gap-3">
						<button className="px-5 py-2.5 bg-[#7B542F] text-white rounded-md text-sm font-medium hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-95">
							Book Your Stay
						</button>
						<button className="px-5 py-2.5 border border-white/60 text-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
							View Experiences
						</button>
					</div>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
					<div className="space-y-3">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Our Story
						</p>
						<h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
							A Lagos escape designed for balance—business, leisure, and
							everything between.
						</h2>
						<p className="text-gray-600 text-sm lg:text-base leading-relaxed">
							Molavik Haus was born from a simple belief: every stay should
							feel like a thoughtful invitation. From curated suites to
							serene lounges, each space is crafted to help you arrive,
							unwind, and move with ease.
						</p>
						<p className="text-gray-600 text-sm lg:text-base leading-relaxed">
							We partner with local makers, celebrate Nigerian hospitality,
							and pair it with understated luxury that lets you recharge
							without losing momentum.
						</p>
					</div>
					<div className="bg-[#f8f0e8] rounded-xl p-6 lg:p-8 space-y-4 shadow-sm border border-[#e8d8c8]">
						<h3 className="text-lg lg:text-xl font-semibold text-gray-900">
							What guides us
						</h3>
						<ul className="space-y-3 text-sm lg:text-base text-gray-700">
							<li className="flex items-start gap-2">
								<span className="mt-1 h-2 w-2 rounded-full bg-[#7B542F]" />
								Intentional design that blends comfort with calm.
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 h-2 w-2 rounded-full bg-[#7B542F]" />
								Service that anticipates needs—before you ask.
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 h-2 w-2 rounded-full bg-[#7B542F]" />
								Local partnerships that celebrate community and culture.
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 h-2 w-2 rounded-full bg-[#7B542F]" />
								Suites that feel residential, with room to breathe.
							</li>
						</ul>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="px-4 lg:px-16 py-16 lg:py-28 bg-[#0f0f0f] text-white"
				{...fade}
			>
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					<div className="space-y-3 w-full lg:w-1/2">
						<p className="text-[#f2e1d1] text-xs uppercase tracking-[0.2em]">
							Staying With Us
						</p>
						<h2 className="text-2xl lg:text-4xl font-semibold">
							Suites that keep you grounded and connected.
						</h2>
						<p className="text-sm lg:text-base text-white/80 leading-relaxed">
							From single suites to family residences, every room is layered
							with natural textures, warm lighting, and thoughtful tech so
							you can work, rest, and reconnect seamlessly.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="border border-white/10 rounded-lg p-4 bg-white/5">
								<p className="text-sm font-semibold">
									Elevated essentials
								</p>
								<p className="text-xs text-white/70 mt-1">
									Plush bedding, rain showers, curated amenities.
								</p>
							</div>
							<div className="border border-white/10 rounded-lg p-4 bg-white/5">
								<p className="text-sm font-semibold">Connected spaces</p>
								<p className="text-xs text-white/70 mt-1">
									Fast Wi-Fi, private work nooks, calming lounges.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
						<div
							className="h-48 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
							style={{ backgroundImage: "url('/images/hotel2.jpg')" }}
						/>
						<div
							className="h-48 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
							style={{ backgroundImage: "url('/images/hotel4.jpg')" }}
						/>
						<div
							className="col-span-1 sm:col-span-2 h-48 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
							style={{ backgroundImage: "url('/images/hotel1.jpg')" }}
						/>
					</div>
				</div>
			</motion.section>

			<motion.section
				className="px-4 lg:px-16 py-16 lg:py-28 bg-[#f8f0e8]"
				{...fade}
			>
				<div className="flex flex-col gap-8">
					<div className="space-y-2">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Signature Touches
						</p>
						<h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
							Dining, wellness, and gatherings—curated for every moment.
						</h2>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
						{[
							{
								title: "Dining that lingers",
								body: "Seasonal menus, local flavors, crafted cocktails, and an atmosphere made for slow evenings.",
							},
							{
								title: "Wellness rituals",
								body: "Morning yoga, spa-inspired amenities, and calming pools to reset your rhythm.",
							},
							{
								title: "Intimate events",
								body: "Versatile venues with tailored service—boardrooms, rooftop cocktails, or private celebrations.",
							},
						].map(item => (
							<div
								key={item.title}
								className="bg-white border border-[#e8d8c8] rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300"
							>
								<h3 className="text-lg font-semibold text-gray-900">
									{item.title}
								</h3>
								<p className="text-sm text-gray-600 mt-2 leading-relaxed">
									{item.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{[
						{ label: "Suites & Residences", value: "120+" },
						{ label: "Curated Experiences", value: "45+" },
						{ label: "Corporate Partners", value: "30+" },
						{ label: "Guest Satisfaction", value: "4.9/5" },
					].map(stat => (
						<div
							key={stat.label}
							className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
						>
							<p className="text-3xl lg:text-4xl font-semibold text-[#7B542F]">
								{stat.value}
							</p>
							<p className="text-xs lg:text-sm text-gray-600 mt-2">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</motion.section>

			<motion.section
				className="px-4 lg:px-16 py-20 lg:py-28 bg-[#0f0f0f] text-white"
				{...fade}
			>
				<div className="max-w-4xl mx-auto text-center space-y-4">
					<p className="text-[#f2e1d1] text-xs uppercase tracking-[0.3em]">
						Our Promise
					</p>
					<h2 className="text-2xl lg:text-4xl font-semibold">
						Your stay should feel personal. We make sure it does.
					</h2>
					<p className="text-sm lg:text-base text-white/80 leading-relaxed">
						From welcome to farewell, expect attentive service, flexible
						experiences, and spaces that adapt to how you travel. This is
						Molavik Haus—crafted for you.
					</p>
					<div className="flex items-center justify-center gap-3">
						<button className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-semibold hover:bg-white/90 transition-all duration-300 active:scale-95">
							Plan Your Stay
						</button>
						<button className="px-6 py-2.5 border border-white text-white rounded-md text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
							Talk to Us
						</button>
					</div>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
					<div className="lg:col-span-1 space-y-3">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Leadership
						</p>
						<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
							A team obsessed with guest experience.
						</h2>
						<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
							From concierge to culinary to housekeeping, every leader
							trains with one goal: make every stay intuitive, gracious, and
							beautifully memorable.
						</p>
					</div>
					<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{[
							{
								name: "Adaeze Onu",
								role: "General Manager",
								note: "Sets the tone for impeccable, anticipatory service.",
							},
							{
								name: "Kelechi B.",
								role: "Guest Experience Lead",
								note: "Designs bespoke itineraries and surprise moments.",
							},
							{
								name: "Chef Ibrahim",
								role: "Culinary Director",
								note: "Champions local flavors with modern finesse.",
							},
							{
								name: "Nora E.",
								role: "Wellness Curator",
								note: "Crafts daily rituals to help guests reset.",
							},
						].map(person => (
							<div
								key={person.name}
								className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300"
							>
								<p className="text-base font-semibold text-gray-900">
									{person.name}
								</p>
								<p className="text-xs text-[#7B542F] font-semibold mt-1">
									{person.role}
								</p>
								<p className="text-sm text-gray-600 mt-2 leading-relaxed">
									{person.note}
								</p>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section
				className="px-4 lg:px-16 py-16 lg:py-28 bg-[#f8f0e8]"
				{...fade}
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div className="space-y-3">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Neighborhood
						</p>
						<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
							Rooted in Lagos, inspired by its energy.
						</h2>
						<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
							Walkable to galleries, dining, and the waterfront. We partner
							with local artisans and guides to immerse you in the city’s
							art, fashion, and culinary scenes.
						</p>
						<div className="flex flex-wrap gap-3">
							<span className="px-3 py-1 bg-white rounded-full text-xs font-semibold border border-[#e8d8c8] text-[#7B542F]">
								Galleries Tour
							</span>
							<span className="px-3 py-1 bg-white rounded-full text-xs font-semibold border border-[#e8d8c8] text-[#7B542F]">
								Food Walk
							</span>
							<span className="px-3 py-1 bg-white rounded-full text-xs font-semibold border border-[#e8d8c8] text-[#7B542F]">
								Waterfront Evenings
							</span>
						</div>
					</div>
					<div
						className="h-[260px] lg:h-[340px] rounded-xl overflow-hidden shadow-md border border-[#e8d8c8] bg-cover bg-center"
						style={{ backgroundImage: "url('/images/hotel3.jpg')" }}
					/>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="max-w-5xl mx-auto text-center space-y-4">
					<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
						Guest Notes
					</p>
					<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
						Stays that feel effortless—and remembered.
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
						{[
							{
								name: "Tomi · Business",
								note: "Quiet suites, strong Wi‑Fi, and a team that sets up every meeting perfectly.",
							},
							{
								name: "Ivie · Leisure",
								note: "Loved the slow breakfasts, spa touches, and curated art everywhere.",
							},
							{
								name: "Kunle · Events",
								note: "They handled our offsite end-to-end—venues, dining, seamless logistics.",
							},
						].map(card => (
							<div
								key={card.name}
								className="border border-gray-200 rounded-lg p-5 shadow-sm bg-[#f8f0e8]/60"
							>
								<p className="text-sm text-gray-800 leading-relaxed">
									“{card.note}”
								</p>
								<p className="text-xs text-[#7B542F] font-semibold mt-3">
									{card.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default AboutPage;
