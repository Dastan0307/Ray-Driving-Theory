'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/QuestionsComponent.module.css'
import { Question } from '../types/type'

const fetchQuestions = async () => {
	const res = await fetch('/questions.json')
	const data = await res.json()
	return data
}

const QuestionsComponent = () => {
	const [questions, setQuestions] = useState<Question[]>([]) // Для хранения вопросов который получаем из json
	const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]) // Для хранения ID выбранных вопросов из локалстораже

	// Загружаем вопросы и состояние выбранных вопросов из localStorage
	useEffect(() => {
		// Загружаем вопросы из файла questions.json
		fetchQuestions().then(setQuestions)

		// Загружаем выбранные вопросы из localStorage
		const savedSelected = localStorage.getItem('selectedQuestions')
		if (savedSelected) {
			setSelectedQuestions(JSON.parse(savedSelected))
		}
	}, [])

	// Функция для выбора или отмены выбора вопроса
	const toggleQuestion = (id: number) => {
		let updatedSelectedQuestions

		if (selectedQuestions.includes(id)) {
			// Если вопрос уже выбран, убираем его из списка
			updatedSelectedQuestions = selectedQuestions.filter(q => q !== id)
		} else {
			// Если вопрос не выбран, добавляем его в список
			updatedSelectedQuestions = [...selectedQuestions, id]
		}

		// Обновляем состояние
		setSelectedQuestions(updatedSelectedQuestions)

		// Сохраняем обновленный список выбранных вопросов в localStorage
		localStorage.setItem(
			'selectedQuestions',
			JSON.stringify(updatedSelectedQuestions)
		)
		localStorage.setItem(
			'completedQuestions',
			JSON.stringify(updatedSelectedQuestions.length)
		) // Для сохранения прогресса
	}
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
			<ul className={styles.questions}>
				{questions.map(question => (
					<li key={question.id}>
						<label className={styles.custom_checkbox}>
							<input
								type='checkbox'
								checked={selectedQuestions.includes(question.id)}
								onChange={() => toggleQuestion(question.id)}
							/>
							<span className={styles.checkmark}></span>
							{question.question}
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default QuestionsComponent
