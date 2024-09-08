'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navDetails } from '../../../public/constants'
import styles from '../styles/NavBar.module.css'

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
					<p
						className={
							pathname === item.link ? styles.navTitleActive : styles.navTitle
						}
					>
						{item.title}
					</p>
				</Link>
			))}
		</nav>
	)
}
