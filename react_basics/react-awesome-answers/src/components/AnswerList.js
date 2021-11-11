import React from "react";
import AnswerDetails from './AnswerDetails';

export default function AnswerList(props) {
    const answers = props.list
    return (
        <div>
            <h4>Answer List:</h4>
            <ul>
                {
                    answers ?
                    answers.map((e, i) => {
                        return <AnswerDetails
                            key={i}
                            body={e.body}
                            author_full_name={e.author_full_name}
                            created_at={e.created_at}
                            id={e.id}
                            deleteAnswer={props.deleteAnswer}
                        />
                    })
                    :
                    null
                }
            </ul>
        </div>
    )
}
