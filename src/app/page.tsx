import { Advantage } from '@/components/advantage/Advantage';
import { Calculator } from '@/components/calculator/Calculator';
import { FAQ } from '@/components/faq/FAQ';
import { Hero } from '@/components/hero/Hero';
import { Review } from '@/components/review/Review';
import { Service } from '@/components/service/Service';

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
			<Calculator />
			<FAQ />
			<Advantage />
			<Review />
		</>
	);
}
