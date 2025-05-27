import { ICalculateInput } from '@/components/calculator/calculator.interface';

export const checkSummary = ({
	cargo,
	forCity,
	distance = 0,
	floor = 0,
	furniture,
	hour,
	dimensions,
	weight,
	isFlat,
}: ICalculateInput) => {
	let summary = 0;
	if (dimensions) summary += dimensions * 10;
	if (weight !== 0) summary += weight * 2;
	if (cargo) summary += 20;
	if (forCity && distance !== 0) summary += distance * 10;
	if (isFlat && floor) summary += floor * 5;
	if (furniture) summary += 10;
	summary += hour * 5;

	return summary;
};
