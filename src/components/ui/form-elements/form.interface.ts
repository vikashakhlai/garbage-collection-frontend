/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string;
	error?: FieldError | undefined | any;
}

type TypeInputPropsFields = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsFields {}

export interface IUploadField {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
}
