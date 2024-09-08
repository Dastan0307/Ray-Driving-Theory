import Image from 'next/image'
import { categoryDetails } from '../../../public/constants'
import styles from '../styles/CategoriesList.module.css'

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
