import Banner from "@/components/Banner";
import Conferences from "@/components/Conferences";
import Offers from "@/components/Offers";
import QuickBook from "@/components/QuickBook";
import Residences from "@/components/Residences";
import Suites from "@/components/Suites";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<div>
			<Banner />
			<QuickBook />
			<Conferences />
			<Residences />
			<Offers />
			<Suites />
			<Testimonials />
		</div>
	);
}
