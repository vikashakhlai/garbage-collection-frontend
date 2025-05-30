export interface ICreateOrderInput {
	phone: string;
	date: Date;
	time: Date;
	address: string;
	flat?: string;
	entrance?: string;
	distance?: number;
	hour: number;
	floor?: number;
	comment?: string;
	service: number;
	weight: number;
	dimensions: number;
	isHeavy?: boolean;
	isDisassembly?: boolean;
}
