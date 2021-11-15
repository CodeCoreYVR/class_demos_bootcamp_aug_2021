import React, { useState, useEffect } from 'react';
// import questionIndexData from '../mock_data/questionIndexData';
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';
import { Link } from 'react-router-dom'

export default function QuestionIndexPage() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        Question.index()
            .then((questionsData) => {
                setQuestions(questionsData);
            })
    }, [])

    const deleteQuestion = (id) => {
        setQuestions(
            questions.filter(q => q.id !== id)
        )
        // this.setState({
        //     questions: this.state.questions.filter(q => q.id !== id)
        // })
    }

    const createQuestion = (params) => {
        setQuestions(
            [
                ...questions,
                {
                    id: (Math.max(...questions.map(q => q.id)) + 1),
                    ...params
                }
            ]
        )
    }

    return (
        <div>
            {questions.map((e) => {
                return (
                    <h1 key={e.id}>{e.id} - <Link to={`/questions/${e.id}`}>{e.title}</Link> <button onClick={() => deleteQuestion(e.id)}>Delete</button> </h1>
                )
            })}
            <NewQuestionForm createQuestion={createQuestion} />
            {/* <NewQuestionForm createQuestion={(params) => this.createQuestion(params)} /> */}
        </div>
    )
}
