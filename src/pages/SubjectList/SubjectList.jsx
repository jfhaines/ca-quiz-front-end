import React from 'react'
import PreviewCard from '@/components/PreviewCard/PreviewCard.jsx'
import Title from '../../components/Title/Title.jsx'
import AddButton from '../../components/AddButton/AddButton.jsx'
import CardsContainer from '@/components/CardsContainer/CardsContainer.jsx'
import './style/SubjectList.css'
import quizLogo from '../../assets/quiz-logo.svg'
import { useNavigate, useOutletContext } from 'react-router-dom'

const SubjectList = () => {
    const { subjects } = useOutletContext()

    const nav = useNavigate()

    const addSubject = async (event) => {
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `subject/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name: 'Default' })
        })
        let json = await res.json()
        if (res.status === 201) {
            nav(`/subject/${json._id}`, { state: { inEditMode: true } })
        } else if (res.status === 401) {
            localStorage.clear()
            nav('/auth/login')
        } else if (res.status === 500) {
            console.log('Internal server error')
        }
    }

    const getSubjectList = subjects => {
        let subjectList = subjects.map(subject => {
            if (!subject) {
                return
            }
            let heading = subject.name
            let text = `${subject.quizCount} ${subject.quizCount > 1 ? 'quizzes' : 'quiz'}`
            let logo = quizLogo
            let tag = 'Subject'
            return <PreviewCard path={`subject/${subject._id}`} key={subject._id} heading={heading} text={text} logo={logo} tag={tag} />
        })
        subjectList.push(<AddButton path='/subject/add' isEmpty={!Boolean(subjectList.length)} text='Add Subject' />)
        return subjectList
    }

    return (
        <main className='subject-list'>
            <div className='outer-content-wrapper'>
                <Title subheading='Subjects' heading='HOME' />
                <CardsContainer>
                    {getSubjectList(subjects)}
                </CardsContainer>
            </div>
        </main>
    )
}

export default SubjectList