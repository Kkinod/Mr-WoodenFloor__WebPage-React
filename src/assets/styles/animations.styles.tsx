import { keyframes } from 'styled-components';

export const animationMoveInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-10rem);
	}

	80% {
		transform: translate(1rem);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const animationMoveInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(10rem);
	}

	80% {
		transform: translate(-1rem);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;
