import Image from 'next/image'
import styles from '../styles/CardList.module.css'
import { cardDetails } from '../../../public/constants'


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
