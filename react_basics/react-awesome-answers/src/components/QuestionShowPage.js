import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList";
import QuestionDetails from './QuestionDetails';
// import questionData from '../mock_data/questionData';
import { Question } from '../requests';


export default function QuestionShowPage(props) {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        Question.show(props.match.params.id) //not hard coded anymore because we have access to params through router
            .then((fetchedAPIQuestion) => {
                setQuestion(fetchedAPIQuestion);
            })
    }, [])

    //  {
    // id:1,
    // title:'what is this'
    // body:'nothing'
    // answers:[]
    // }
    const deleteAnswer = id => {
        const { answers, ...rest } = question;
        setQuestion(
            {
                answers: answers.filter(a => a.id !== id),
                ...rest
            }
        )
    }
    const { title, body, author, view_count, created_at } = question;
    return (
        <div>
            <QuestionDetails
                name={title}
                body={body}
                view_count={view_count}
                created_at={new Date(created_at)}
                author={author}
            />

            <AnswerList list={question.answers} deleteAnswer={(id) => deleteAnswer(id)} />
        </div>
    )
}

