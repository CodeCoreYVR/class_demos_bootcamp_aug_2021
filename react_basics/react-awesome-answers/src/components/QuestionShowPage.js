import React from "react";
import AnswerList from "./AnswerList";
import QuestionDetails from './QuestionDetails';

const QuestionShowPage = () => {
    return (
        <div>
            <QuestionDetails
                name="What's ur favourite color?"
                body="Red, Red, Red"
                view_count={20}
                created_at={new Date()}
                author={{ full_name: "Admin User" }}
            />

            <AnswerList list={
                [
                    { body: "red", author_full_name: "aaa", created_at: "2021-10-01" },
                    { body: "yellow", author_full_name: "bbb", created_at: "2021-09-01" },
                    { body: "blue", author_full_name: "ccc", created_at: "2021-12-01" },
                ]
            } />
        </div>
    )
}

export default QuestionShowPage;