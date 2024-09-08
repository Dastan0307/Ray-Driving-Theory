'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/ProgressCard.module.css'

export default function ProgressCard() {
	const [completedQuestions, setCompletedQuestions] = useState(0)

	// Загружаем количество завершенных вопросов из localStorage
	useEffect(() => {
		const setProgress = localStorage.getItem('completedQuestions')
		if (setProgress) {
			setCompletedQuestions(JSON.parse(setProgress))
		}
	}, [])

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
				{/* Кнопка перехода на страницу вопросов */}
				<Link href='/questions' type='button'>
					<Image
						src='/chevron-circle-right.svg'
						alt='chevron-circle-right'
						width={24}
						height={24}
					/>
				</Link>
			</div>
			<div className={styles.questionsProgress}>
				<p className={styles.questionsProgressText}>
					{completedQuestions} questions out of 20 passed
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
