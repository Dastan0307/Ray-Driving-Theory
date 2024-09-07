import Image from 'next/image'
import styles from '../styles/CardList.module.css'

const cardDetails = [
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

export default function CardList() {
	return (
		<div className={styles.cardList}>
			{cardDetails.map(card => {
				return (
					<div className={styles.card} key={card.id}>
						<Image src={card.image} alt={card.title} width={40} height={40} />
						<p className={styles.cardText}>{card.title}</p>
					</div>
				)
			})}
		</div>
	)
}
