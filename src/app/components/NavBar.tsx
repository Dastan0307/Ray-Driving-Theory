'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/NavBar.module.css'

const navDetails = [
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

export default function NavBar() {
	const pathname = usePathname()

	return (
		<nav className={styles.nav}>
			{navDetails.map(item => (
				<Link href={item.link} key={item.id} className={styles.navOption}>
					<Image
						src={pathname === item.link ? item.iconIsActive : item.icon}
						alt={item.title}
						width={24}
						height={24}
					/>
					<p className={pathname === item.link ? styles.navTitleActive : styles.navTitle}>{item.title}</p>
				</Link>
			))}
		</nav>
	)
}
