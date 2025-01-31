import React from 'react';

interface InizioSymbolLogoProps {
	className?: string;
	variant?: 'default' | 'white';
}

const InizioSymbolLogo: React.FC<InizioSymbolLogoProps> = ({ 
	className,
	variant = 'default' // 기본값은 default 컬러로 설정
}) => {
	// 흰색 변형일 경우 사용할 그라디언트 ID들
	const gradient1Id = variant === 'default' ? 'gradient1' : 'whiteGradient1';
	const gradient2Id = variant === 'default' ? 'gradient2' : 'whiteGradient2';

	return (
		<svg 
			className={className}
			viewBox="0 0 500 500" 
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<rect id="clip-path" x="34.722" width="430.556" height="500"/>
				<linearGradient 
					id="gradient1" 
					gradientUnits="userSpaceOnUse" 
					x1="318.0066" 
					y1="-2307.1309" 
					x2="165.8375" 
					y2="-2528.6514" 
					gradientTransform="matrix(1 0 0 -1 0 -2148)"
				>
					<stop offset="0" stopColor="#00B6B7"/>
					<stop offset="0.3" stopColor="#02B3B9"/>
					<stop offset="0.5" stopColor="#0AAAC0"/>
					<stop offset="0.7" stopColor="#189CCC"/>
					<stop offset="0.8" stopColor="#2B87DD"/>
					<stop offset="0.9" stopColor="#446DF2"/>
					<stop offset="1" stopColor="#525FFF"/>
				</linearGradient>
				<linearGradient 
					id="gradient2" 
					gradientUnits="userSpaceOnUse" 
					x1="29.6554" 
					y1="-2175.2476" 
					x2="412.6964" 
					y2="-2592.5652" 
					gradientTransform="matrix(1 0 0 -1 0 -2148)"
				>
					<stop offset="0.1" stopColor="#00B6B7"/>
					<stop offset="0.3" stopColor="#04B1BA"/>
					<stop offset="0.5" stopColor="#0FA5C5"/>
					<stop offset="0.7" stopColor="#238FD6"/>
					<stop offset="0.9" stopColor="#3F72EE"/>
					<stop offset="1" stopColor="#525FFF"/>
				</linearGradient>
				<linearGradient 
					id="whiteGradient1" 
					gradientUnits="userSpaceOnUse" 
					x1="318.0066" 
					y1="-2307.1309" 
					x2="165.8375" 
					y2="-2528.6514" 
					gradientTransform="matrix(1 0 0 -1 0 -2148)"
				>
					<stop offset="0" stopColor="#FFFFFF"/>
					<stop offset="1" stopColor="#FFFFFF"/>
				</linearGradient>
				<linearGradient 
					id="whiteGradient2" 
					gradientUnits="userSpaceOnUse" 
					x1="29.6554" 
					y1="-2175.2476" 
					x2="412.6964" 
					y2="-2592.5652" 
					gradientTransform="matrix(1 0 0 -1 0 -2148)"
				>
					<stop offset="0" stopColor="#FFFFFF"/>
					<stop offset="1" stopColor="#FFFFFF"/>
				</linearGradient>
			</defs>
			<g>
				<g>
					<clipPath id="clip">
						<use xlinkHref="#clip-path"/>
					</clipPath>
					<g style={{ clipPath: "url(#clip)" }}>
						<path 
							fill={`url(#${gradient1Id})`}
							d="M337.438,279c-16.379,0-29.963,11.9-32.759,27.5l-63.521,34.8l-70.41-41v-88.4l70.41-44.3l85.593,50.7c9.887,5.9,22.671,2.6,28.463-7.3c5.893-9.9,2.597-22.7-7.29-28.5l-96.479-57.2c-6.691-4-15.081-3.9-21.672,0.3l-90.885,57.2c-6.091,3.8-9.687,10.5-9.687,17.6v111.9c0,7.4,3.894,14.3,10.287,18l90.885,52.9c3.196,1.9,6.791,2.8,10.487,2.8c3.694,0,6.891-0.8,9.987-2.6l73.707-40.4c3.894,1.6,8.288,2.6,12.784,2.6c18.376,0,33.257-14.9,33.257-33.3S355.715,279,337.338,279H337.438z"
						/>
						<path 
							fill={`url(#${gradient2Id})`}
							d="M432.016,339.6c-16.379,0-29.962,11.9-32.757,27.5l-160.897,88.2L76.266,360.9V184.3l151.409,88.1c6.293,3.7,14.082,3.8,20.474,0.3l193.856-106.3c6.591-3.6,10.687-10.4,10.787-17.9c0.099-7.5-3.796-14.4-10.188-18.3L271.021,28.6C268.724,12.4,254.941,0,238.162,0c-16.779,0-33.257,14.9-33.257,33.3c0,18.4,14.886,33.744,33.257,33.3c7.838-0.19,8.09-0.8,11.685-2.2l140.124,83l-151.609,83.1L65.979,130.2c-6.391-3.7-14.382-3.8-20.774,0c-6.491,3.7-10.387,10.6-10.387,18v224.7c0,7.4,3.896,14.3,10.287,18l182.569,106.3c3.196,1.9,6.791,2.8,10.487,2.8c3.696,0,6.891-0.8,9.987-2.6l171.084-93.8c3.896,1.6,8.29,2.6,12.784,2.6c18.378,0,33.259-14.9,33.259-33.3S450.394,339.6,432.016,339.6z"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default InizioSymbolLogo;
