import { CardDetail } from '@/app/types/type'

export const cardDetails: CardDetail[] = [
	{
		id: 1,
		title: 'DVSA Exam',
		image: '/icon.svg',
	},
	{
		id: 2,
		title: 'Express mode',
		image: '/icon (1).svg',
	},
	{
		id: 3,
		title: 'Hazard perception',
		image: '/icon (2).svg',
	},
	{
		id: 4,
		title: 'Road signs',
		image: '/icon (3).svg',
	},
	{
		id: 5,
		title: 'Multiplayer Learning',
		image: '/icon (4).svg',
	},
]

export const categoryDetails: CardDetail[] = [
	{
		id: 1,
		title: 'Mistakes',
		image: '/icon (5).svg',
	},
	{
		id: 2,
		title: 'Statistics',
		image: '/icon (6).svg',
	},
	{
		id: 3,
		title: 'Highway Code',
		image: '/icon (7).svg',
	},
	{
		id: 4,
		title: 'Favorites',
		image: '/icon (8).svg',
	},
]


export const navDetails = [
	{
		id: 1,
		title: 'Home',
		icon: '/home.svg',
		iconIsActive: '/homeactive.svg',
		link: '/home',
	},
	{
		id: 2,
		title: 'Your plan',
		icon: '/route.svg',
		iconIsActive: '/routeactive.svg',
		link: '/yourplan',
	},
	{
		id: 3,
		title: 'Leaderboard',
		icon: '/ranking.svg',
		iconIsActive: '/rankingactive.svg',
		link: '/leaderboard',
	},
	{
		id: 4,
		title: 'Profile',
		icon: '/profile.svg',
		iconIsActive: '/profileactive.svg',
		link: '/profile',
	},
]
