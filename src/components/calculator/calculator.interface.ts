export interface ICalculateInput {
	dimensions: number;
	weight: number;
	hour: number;
	floor: number;
	forCity: boolean;
	isFlat: boolean;
	distance: number;
	cargo: boolean;
	furniture: boolean;
	service: {
		value: string | number;
		label: string;
	};
}
