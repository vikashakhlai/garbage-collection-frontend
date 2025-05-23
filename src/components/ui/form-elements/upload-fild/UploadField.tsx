import cn from 'classnames';
import { FC } from 'react';
import styles from '../../../ui/form-elements/form.module.scss';

import { IUploadField } from '../form.interface';
import { useUpload } from './useUpload';

const UploadField: FC<IUploadField> = ({
	onChange,
	error,
	folder = '',
	placeholder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder);

	return (
		<div className={cn(styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label className={styles.uploadLabel}>
					<span className={styles.uploadLabelHeader}>{placeholder}</span>
					<input
						className={styles.uploadInput}
						type='file'
						onChange={uploadFile}
					/>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadImageContainer}>
						{isLoading ? (
							<div className={styles.loadingSpinner}></div>
						) : (
							value && <></>
							// value && <Image alt='' src={value} layout='fill' unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadField;
