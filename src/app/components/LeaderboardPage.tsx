import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Leaderboard.module.css'

const LeaderboardPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.btn}>
				<Link href={'/home'}>
					<Image
						src='/arrow-left.svg'
						alt='arrow-left'
						width={24}
						height={24}
					/>
				</Link>
				<p>Learning</p>
			</div>
			<div className={styles.title}>
				<p>Tests</p>
				<div className={styles.liner}></div>
			</div>

			<div className={styles.numbers}>
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
				<span>9</span>
				<span>10</span>
				<span>11</span>
				<span>12</span>
				<span>13</span>
				<span>14</span>
				<span>15</span>
				<span>16</span>
				<span>17</span>
				<span>18</span>
				<span>19</span>
				<span>20</span>
				<span>21</span>
				<span>22</span>
				<span>23</span>
				<span>24</span>
				<span>25</span>
				<span>26</span>
				<span>27</span>
				<span>28</span>
			</div>
		</div>
	)
}

export default LeaderboardPage
