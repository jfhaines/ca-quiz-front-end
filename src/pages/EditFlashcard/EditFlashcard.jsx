import React from 'react'
import './style/EditFlashcard.css'
import ContentHeader from '@/components/ContentHeader/ContentHeader.jsx'
import { useOutletContext, useParams } from 'react-router-dom'
import EditFlashcardForm from '@/components/EditFlashcardForm/EditFlashcardForm.jsx'

const EditFlashcard = () => {
    const { quiz, setQuiz } = useOutletContext()
    const { flashcardId, quizId } = useParams()

    const getFlashcardById = () => {
        for (let flashcard of quiz.flashcards) {
            if (flashcard._id == flashcardId) {
                return flashcard
            }
        }
    }

    if (!quiz.flashcards) {
        return <div></div>
    }

    return (
        <main className='edit-flashcard'>
            <div className='outer-content-wrapper'>
                <ContentHeader subheading='Edit Flashcard' heading={quiz.name ? quiz.name.toUpperCase() : ''} />
                <EditFlashcardForm flashcard={getFlashcardById()} setQuiz={setQuiz} action='edit' />
            </div>
        </main>
    )
}

export default EditFlashcard