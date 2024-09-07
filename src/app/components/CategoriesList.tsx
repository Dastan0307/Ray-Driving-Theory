import Image from 'next/image'
import styles from '../styles/CategoriesList.module.css'

const categoryDetails = [
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

export default function CategoriesList() {
	return (
		<div className={styles.categoriesList}>
			{categoryDetails.map(category => (
				<div key={category.id} className={styles.categoriesItem}>
					<Image
						src={category.image}
						alt={category.title}
						width={58}
						height={58}
					/>
					<h2>{category.title}</h2>
				</div>
			))}
		</div>
	)
}
