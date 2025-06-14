import { useEffect } from 'react'

function useSetHeadTag() {
	// console.log('useSetHeadTag called');
	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			const localUrl = '/dafetite/dafeWhiteBlack180pxy.png';

			document.querySelector('link[sizes="32x32"]').href = localUrl;
			document.querySelector('link[sizes="16x16"]').href = localUrl;
			document.querySelector('link[rel="apple-touch-icon"]').href = localUrl;
		}
	}, []);
}
export { useSetHeadTag }
