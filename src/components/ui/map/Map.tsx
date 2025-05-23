'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/LeafletMap.tsx
import 'leaflet/dist/leaflet.css';

import { useEffect, useRef, useState } from 'react';

type LeafletType = typeof import('leaflet');

const LeafletMap = ({
	onAddressChange,
}: {
	onAddressChange: (address: string) => void;
}) => {
	const mapRef = useRef<any>(null);
	const markerRef = useRef<any>(null);
	const mapContainerRef: any = useRef<HTMLDivElement>(null);
	const [isMounted, setIsMounted] = useState(false);

	// Иконки маркеров
	const iconUrls = {
		icon: '/images/leaflet/marker-icon.png',
		iconRetina: '/images/leaflet/marker-icon-2x.png',
		shadow: '/images/leaflet/marker-shadow.png',
	};

	// Координаты центра Минска
	const MINSK_CENTER: [number, number] = [53.902284, 27.561831];
	const DEFAULT_ZOOM = 12;

	useEffect(() => {
		setIsMounted(true);
		return () => setIsMounted(false);
	}, []);

	useEffect(() => {
		if (!isMounted || !mapContainerRef.current) return;

		let mounted = true;
		let L: LeafletType;

		const initMap = async () => {
			try {
				L = await import('leaflet');
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				await import('leaflet/dist/leaflet.css');

				if (mapRef.current) return;

				// Инициализация карты с центром в Минске
				const mapInstance = L.map(mapContainerRef.current).setView(
					MINSK_CENTER,
					DEFAULT_ZOOM
				);

				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				}).addTo(mapInstance);

				// Создаем иконку для будущих маркеров
				const customIcon = new L.Icon({
					iconUrl: iconUrls.icon,
					iconRetinaUrl: iconUrls.iconRetina,
					shadowUrl: iconUrls.shadow,
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					shadowSize: [41, 41],
				});

				// Обработчик клика по карте
				mapInstance.on('click', (e: any) => {
					// Удаляем предыдущий маркер
					if (markerRef.current) {
						markerRef.current.remove();
					}

					// Создаем новый маркер
					const markerInstance = L.marker([e.latlng.lat, e.latlng.lng], {
						icon: customIcon,
						draggable: true,
					}).addTo(mapInstance);

					// Обработчик перемещения маркера
					markerInstance.on('dragend', (dragEvent: any) => {
						const position = dragEvent.target.getLatLng();
						geocodePosition(position.lat, position.lng);
					});

					// Геокодирование позиции
					geocodePosition(e.latlng.lat, e.latlng.lng);
					markerRef.current = markerInstance;
				});

				if (mounted) {
					mapRef.current = mapInstance;
				}
			} catch (error) {
				console.error('Leaflet initialization error:', error);
			}
		};

		initMap();

		return () => {
			mounted = false;
			if (mapRef.current) {
				mapRef.current.remove();
				mapRef.current = null;
			}
			if (markerRef.current) {
				markerRef.current.remove();
				markerRef.current = null;
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMounted]);

	const geocodePosition = async (lat: number, lng: number) => {
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
			);
			const data = await response.json();
			onAddressChange(
				data.display_name || `Location at ${lat.toFixed(4)}, ${lng.toFixed(4)}`
			);
		} catch (error) {
			console.error('Geocoding error:', error);
			onAddressChange(
				`Error: Could not get address (${lat.toFixed(4)}, ${lng.toFixed(4)})`
			);
		}
	};

	return (
		<div className='w-full h-[400px] rounded-lg overflow-hidden relative mt-[30px] mb-[30px]'>
			<div ref={mapContainerRef} className='w-full h-full' />
			{!isMounted && (
				<div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
					<p>Loading map...</p>
				</div>
			)}
		</div>
	);
};

export default LeafletMap;
