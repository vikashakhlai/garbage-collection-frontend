import { ICalculateInput } from '@/components/calculator/calculator.interface';

export const checkSummary = ({
	cargo,
	forCity,
	distance = 0,
	floor,
	furniture,
	hour,
}: ICalculateInput) => {
	let summary = 0;
	if (cargo) summary += 20;
	if (forCity && distance !== 0) summary += distance * 10;
	if (floor !== 0) summary += floor * 5;
	if (furniture) summary += 10;
	summary += hour * 5;

	return summary;
};
