import type { Metadata } from "next";
import "./globals.css";
import { jakartaSans } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Molavikhaus Website",
	description: "Molavikhaus Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={jakartaSans.variable}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
