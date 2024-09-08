import CardList from './components/CardList'
import CategoriesList from './components/CategoriesList'
import Header from './components/Header'
import ProgressCard from './components/ProgressCard'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<ProgressCard />
			<CardList />
			<CategoriesList />
		</main>
	)
}
