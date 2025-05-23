import cn from 'classnames';
import { forwardRef } from 'react';

import { IField } from './form.interface';
import styles from './form.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<>
				{type === 'checkbox' ? (
					<>
						<div className={cn(styles.common, styles.checkField)} style={style}>
							<input
								className={styles.checkFieldInput}
								type={type}
								ref={ref}
								{...rest}
							/>
							<label className={styles.checkFieldText}>
								<span>{placeholder}</span>
							</label>
						</div>
						{error && <div className={styles.error}>{error.message}</div>}
					</>
				) : (
					<div className={cn(styles.common, styles.field)} style={style}>
						<label className={styles.fieldText}>
							<span>{placeholder}</span>
						</label>
						<input
							className={styles.fieldInput}
							type={type}
							ref={ref}
							{...rest}
						/>
						{error && <div className={styles.error}>{error.message}</div>}
					</div>
				)}
			</>
		);
	}
);

Field.displayName = 'Field';

export default Field;
