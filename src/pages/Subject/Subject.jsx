import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '@/components/Title/Title.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import AddButton from '@/components/AddButton/AddButton.jsx'
import QuizCard from '@/components/QuizCard/QuizCard.jsx'

const Subject = () => {
    const [subject, setSubject] = useState({})
    // const { subjectId } = useParams()

    useEffect(() => {
        // fetch subject by id
        // setSubject(subject)
        setSubject({
            _id: 320843903290,
            name: 'German',
            quizzes: [
                { _id: 3498753498743, name: 'Quiz One', flashcardCount: 14 },
                { _id: 4897342387903, name: 'Quiz Two', flashcardCount: 17 },
                { _id: 4389745094089, name: 'Quiz Three', flashcardCount: 8 },
                { _id: 8590834809843, name: 'Quiz Four', flashcardCount: 32 }
            ]
        })
    }, [])

    const getQuizList = quizzes => {
        let quizList = quizzes.map(quiz => <QuizCard key={quiz._id} quiz={quiz} />)
        quizList.push(<AddButton key={'quiz-add-button'} />)
        return quizList
    }

    return (
        <main>
            <Title subheading='Quiz List' heading={subject.name ? subject.name.toUpperCase() : ''} />
            <CardsContainer>
                {getQuizList(subject.quizzes || [])}
            </CardsContainer>
        </main>
    )
}

export default Subject