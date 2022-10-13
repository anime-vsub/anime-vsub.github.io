import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;

export const load: PageLoad = () => {
	// =========== data ===========
	const meta = {
		strings: ['Latest TV Shows'],
		download: {
			description: `PikaShow App will give you a chance to enjoy unlimited entertainment easier than on any other platform.\n\nDownload PikaShow APK from below.`,
			file: '',
			name: 'Download',
			versionName: ' PikaShow APK (v82) '
		},
		cards: [
			{
				icon: 'https://pikashows.com/assets/img/pikashow.svg',
				title: 'What is PikaShow?',
				content:
					'PikaShow App is a streaming platform for Android! Includes live cricket, TV shows, New Movies, Download Videos, and lot more. All in one entertainment application provides premium content for free.'
			},
			{
				icon: 'https://pikashows.com/assets/img/pikashow.svg',
				title: 'What is PikaShow?',
				content:
					'PikaShow App is a streaming platform for Android! Includes live cricket, TV shows, New Movies, Download Videos, and lot more. All in one entertainment application provides premium content for free.'
			},
			{
				icon: 'https://pikashows.com/assets/img/pikashow.svg',
				title: 'What is PikaShow?',
				content:
					'PikaShow App is a streaming platform for Android! Includes live cricket, TV shows, New Movies, Download Videos, and lot more. All in one entertainment application provides premium content for free.'
			}
		]
	};
	const features = {
		name: 'Features',
		description: 'List of all the exclusive features of PikaShow App.',
		items: [
			{
				title: 'Main Features:',
				uls: [
					'The PikaShow APK is compatible with any android device including smartphones and tablets. It runs and plays videos smoothly without any lags reported.',
					'Features capability of downloading movies and TV shows on your device. You can choose whether a stream or download the video and watch it offline.',
					'Supports subtitles for every video. You can enable subtitles while watching. In any case, if subtitles are not available, you will be able to search online for subtitles with the option given in the app.',
					'Screen casting option gives you the chance to cast your mobile screen to TV without hesitation.',
					'PikaShow App supports Android TV and FireStick too.'
				],
				images: ['https://pikashows.com/assets/img/features_1.webp']
			}
		]
	};

	return { meta, features };
};
