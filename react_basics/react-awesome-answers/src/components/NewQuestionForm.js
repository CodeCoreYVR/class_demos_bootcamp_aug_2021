import React from 'react'

export default function NewQuestionForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get("title"),
            body: formData.get("body")
        }
        console.log(params);
        props.createQuestion(params);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="title" />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <br />
                <input type="text" name="body" id="body" />
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}
