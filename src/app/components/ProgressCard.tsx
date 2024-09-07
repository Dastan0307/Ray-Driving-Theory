import Image from 'next/image'
import styles from '../styles/ProgressCard.module.css'

export default function ProgressCard() {
	return (
		<div className={styles.progressCard}>
			<div className={styles.learningStatus}>
				<Image
					src='/Group 861.svg'
					alt='learning-status'
					width={58}
					height={58}
				/>
				<p className={styles.learningStatusTitle}>
					Learning <span>Category В</span>
				</p>
				<Image
					src='/chevron-circle-right.svg'
					alt='chevron-circle-right'
					width={24}
					height={24}
				/>
			</div>
			<div className={styles.questionsProgress}>
				<p className={styles.questionsProgressText}>
					112 questions out of 730 passed
				</p>
				<div className={styles.liners}>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
					<span className={styles.liner}></span>
				</div>
			</div>
		</div>
	)
}
