import React from 'react'
import './style/EditFlashcard.css'
import Title from '@/components/Title/Title.jsx'
import BackButton from '@/components/BackButton/BackButton.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import EditFlashcardMultipleChoice from '@/components/EditFlashcardMultipleChoice/EditFlashcardMultipleChoice.jsx'

const EditFlashcard = () => {
    const { quiz, setQuiz } = useOutletContext()
    const { flashcardId } = useParams()

    const getFlashcardById = () => {
        for (let flashcard of quiz.flashcards) {
            if (flashcard._id == flashcardId) {
                return flashcard
            }
        }
    }

    const setFlashcardById = (flashcardId, updatedFlashcard, quiz) => {
        quiz.flashcards.forEeach((flashcard, index) => {
            if (flashcard._id === flashcardId) {
                let flashcardList = [...quiz.flashcards]
                flashcardList[index] = updatedFlashcard
                setQuiz({...quiz, flashcards: flashcardList})
                return
            }
        })
        setQuiz({...quiz, flashcards: [...quiz.flashcards, updatedFlashcard]})
    }

    if (!quiz.flashcards) {
        return <div></div>
    }

    return (
        <>
            <BackButton className={'edit-flashcard-back-button'}>Quiz</BackButton>
            <main className='main-edit-flashcard'>
                <Title subheading='Edit Flashcard' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <EditFlashcardMultipleChoice flashcard={getFlashcardById()} setFlashcardById={setFlashcardById} />
            </main>
        </>
    )
}

export default EditFlashcard