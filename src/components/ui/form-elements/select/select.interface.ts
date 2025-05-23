/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControllerRenderProps } from 'react-hook-form';
import { Options } from 'react-select';
import { IFieldProps } from '../form.interface';

export interface IOption {
	value: string;
	label: string;
}

export interface ISelect extends IFieldProps {
	options: Options<IOption> | any;
	isMulti?: boolean;
	field: ControllerRenderProps<any, never> | any;
	isLoading?: boolean;
}
