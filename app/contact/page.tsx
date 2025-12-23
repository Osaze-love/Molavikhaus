"use client";

import { motion } from "framer-motion";
import React from "react";

const ContactPage = () => {
	const fade = {
		initial: { opacity: 0, y: 30 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true, amount: 0.2 },
		transition: { duration: 0.65, ease: "easeOut" },
	};

	return (
		<div className="flex flex-col">
			<motion.section
				className="min-h-[45vh] bg-cover bg-center bg-no-repeat relative flex items-center px-4 lg:px-16 py-16 lg:py-28"
				style={{ backgroundImage: "url('/images/hotel4.jpg')" }}
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.75, ease: "easeOut" }}
			>
				<div className="absolute inset-0 bg-black/65" />
				<div className="relative z-10 space-y-3 max-w-4xl text-white">
					<p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-[#f2e1d1]">
						Contact
					</p>
					<h1 className="text-3xl lg:text-5xl font-semibold">
						Here to plan, host, and guide your stay.
					</h1>
					<p className="text-sm lg:text-base text-white/85 max-w-2xl leading-relaxed">
						Reach out for reservations, private events, or bespoke experiences.
						Our team responds quickly and tailors support to what you need.
					</p>
					<div className="flex flex-wrap gap-3">
						<button className="px-5 py-2.5 bg-[#7B542F] text-white rounded-md text-sm font-medium hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-95">
							Call Concierge
						</button>
						<button className="px-5 py-2.5 border border-white/70 text-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 active:scale-95">
							Email Us
						</button>
					</div>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="space-y-2 mb-8">
					<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
						Visit Us
					</p>
					<h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
						Let’s make your visit seamless.
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
					{[
						{
							title: "Front Desk",
							body: "+234 (0) 700 123 4567",
							foot: "24/7 concierge support",
						},
						{
							title: "Email",
							body: "stay@molavikhaus.com",
							foot: "We reply within hours",
						},
						{
							title: "Location",
							body: "1 Molavik Close, Victoria Island, Lagos",
							foot: "Secure parking available",
						},
						{
							title: "Hours",
							body: "Check-in 2pm · Check-out 11am",
							foot: "Early requests on availability",
						},
					].map((item) => (
						<div
							key={item.title}
							className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
						>
							<h3 className="text-lg font-semibold text-gray-900">
								{item.title}
							</h3>
							<p className="text-sm text-gray-700 mt-2 leading-relaxed">
								{item.body}
							</p>
							<p className="text-xs text-gray-500 mt-3">{item.foot}</p>
						</div>
					))}
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-[#f8f0e8]" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div className="space-y-3">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Find Us
						</p>
						<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
							In the heart of Victoria Island.
						</h2>
						<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
							Moments from the business district, art galleries, and waterfront
							experiences. Tell us when you arrive, and we’ll arrange pickups,
							dining, or guided outings.
						</p>
						<div className="flex flex-wrap gap-3">
							<button className="px-5 py-2.5 bg-black text-white rounded-md text-sm font-semibold hover:bg-black/90 transition-all duration-300 active:scale-95">
								Request Pickup
							</button>
							<button className="px-5 py-2.5 border border-black text-black rounded-md text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 active:scale-95">
								View Directions
							</button>
						</div>
					</div>
					<div className="h-[260px] lg:h-[320px] rounded-xl overflow-hidden shadow-md border border-[#e8d8c8] bg-cover bg-center"
						style={{ backgroundImage: "url('/images/hotel2.jpg')" }}
					/>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="space-y-3">
						<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
							Plan With Us
						</p>
						<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
							Send a note—our team will tailor your stay.
						</h2>
						<p className="text-sm lg:text-base text-gray-700 leading-relaxed">
							Share your arrival details, room preferences, or event needs.
							We’ll follow up with a curated plan and next steps.
						</p>
						<div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
							<div className="border border-gray-200 rounded-lg p-4">
								<p className="font-semibold text-gray-900">Response Time</p>
								<p className="text-xs text-gray-600 mt-1">Under 4 hours</p>
							</div>
							<div className="border border-gray-200 rounded-lg p-4">
								<p className="font-semibold text-gray-900">Support</p>
								<p className="text-xs text-gray-600 mt-1">Concierge + Events</p>
							</div>
						</div>
					</div>
					<form className="bg-[#f8f0e8] rounded-xl p-6 lg:p-8 space-y-4 border border-[#e8d8c8] shadow-sm">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex flex-col gap-2">
								<label className="text-xs font-semibold text-gray-800">
									Full Name
								</label>
								<input
									type="text"
									placeholder="Adaeze Okoro"
									className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B542F]/50"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-xs font-semibold text-gray-800">
									Email
								</label>
								<input
									type="email"
									placeholder="you@example.com"
									className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B542F]/50"
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="flex flex-col gap-2">
								<label className="text-xs font-semibold text-gray-800">
									Phone
								</label>
								<input
									type="tel"
									placeholder="+234 800 000 0000"
									className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B542F]/50"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-xs font-semibold text-gray-800">
									Arrival Date
								</label>
								<input
									type="date"
									className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B542F]/50"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<label className="text-xs font-semibold text-gray-800">
								Message
							</label>
							<textarea
								rows={4}
								placeholder="Tell us about your stay, event, or special requests."
								className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7B542F]/50"
							/>
						</div>
						<button
							type="button"
							className="w-full lg:w-max px-6 py-2.5 bg-[#7B542F] text-white rounded-md text-sm font-semibold hover:bg-[#7B542F]/90 transition-all duration-300 active:scale-95"
						>
							Send Message
						</button>
					</form>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-[#0f0f0f] text-white" {...fade}>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
					<div className="space-y-3 lg:col-span-1">
						<p className="text-[#f2e1d1] text-xs uppercase tracking-[0.2em]">
							FAQ
						</p>
						<h2 className="text-2xl lg:text-3xl font-semibold">
							Quick answers before you arrive.
						</h2>
						<p className="text-sm lg:text-base text-white/80 leading-relaxed">
							If you don’t see what you need, our team replies within hours.
						</p>
					</div>
					<div className="lg:col-span-2 grid grid-cols-1 gap-4">
						{[
							{
								q: "Do you offer airport pickup?",
								a: "Yes—share your flight details and we’ll confirm a chauffeured pickup.",
							},
							{
								q: "Can I host a private event?",
								a: "We tailor boardrooms, lounges, and rooftop spaces to your gathering.",
							},
							{
								q: "Is early check-in available?",
								a: "Subject to availability; let us know your arrival time and we’ll prepare.",
							},
						].map(item => (
							<div
								key={item.q}
								className="border border-white/10 rounded-lg p-4 bg-white/5"
							>
								<p className="text-sm font-semibold">{item.q}</p>
								<p className="text-xs text-white/75 mt-2 leading-relaxed">
									{item.a}
								</p>
							</div>
						))}
					</div>
				</div>
			</motion.section>

			<motion.section className="px-4 lg:px-16 py-16 lg:py-28 bg-white" {...fade}>
				<div className="max-w-5xl mx-auto text-center space-y-4">
					<p className="text-[#7B542F] text-xs font-semibold tracking-wide uppercase">
						Stay In Touch
					</p>
					<h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
						Prefer WhatsApp? We’ll respond quickly.
					</h2>
					<p className="text-sm lg:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
						Chat for room preferences, special occasions, or corporate rates. We’ll
						share next steps and confirm details in minutes.
					</p>
					<div className="flex flex-wrap gap-3 justify-center">
						<button className="px-6 py-2.5 bg-[#25D366] text-white rounded-md text-sm font-semibold hover:bg-[#20b65a] transition-all duration-300 active:scale-95">
							Message on WhatsApp
						</button>
						<button className="px-6 py-2.5 border border-gray-300 text-gray-800 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-300 active:scale-95">
							Save Contact
						</button>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default ContactPage;

