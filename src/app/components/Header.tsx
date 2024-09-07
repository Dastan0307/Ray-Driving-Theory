import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>Ray Driving Theory</h1>
			<div className={styles.headerBtns}>
				<Image src='/Button.svg' alt='Crown Img' width={36} height={32} />
				<div className={styles.headerIcon}>
					<Image src='/fire.svg' alt='Fire Img' width={24} height={24} />
					<span>13</span>
				</div>
			</div>
		</header>
	)
}
