import CardList from '../components/CardList'
import CategoriesList from '../components/CategoriesList'
import Header from '../components/Header'
import ProgressCard from '../components/ProgressCard'

const Home = () => {
	return (
		<>
			<Header />
			<ProgressCard />
			<CardList />
			<CategoriesList />
		</>
	)
}

export default Home
