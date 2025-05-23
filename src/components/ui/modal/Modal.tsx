'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

interface Props {
	isOpen?: boolean;
	title: string;
	actionFunction: any;
	onClose: any;
	children: any;
}

const Modal: FC<Props> = ({
	isOpen,
	onClose,
	title,
	children,
	actionFunction,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: { target: any }) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const handleAction = () => {
		actionFunction();
		onClose();
	};

	return (
		<div className={styles.overlay}>
			<div ref={modalRef} className={styles.modal}>
				<h2>{title}</h2>
				<div className={styles.content}>{children}</div>
				<div className={styles.buttons}>
					<button onClick={onClose} className={styles.button}>
						Отмена
					</button>
					<button
						onClick={handleAction}
						className={`${styles.button} ${styles.primaryButton}`}
					>
						Подтвердить
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
