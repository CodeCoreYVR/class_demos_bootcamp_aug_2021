import React from "react";

const AnswerDetails = (props) => {
    const { body, author_full_name, created_at } = props;
    return (
        <div>
            <p>
                {body} <br />
                By {author_full_name}
            </p>
            <p>
                Answered {created_at.toLocaleString()}
            </p>
        </div>
    )
}

export default AnswerDetails;