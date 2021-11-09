import React, { Component } from 'react';
import questionIndexData from '../mock_data/questionIndexData';

class QuestionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: questionIndexData
        }
    }

    render() {
        return (
            <div>
                {this.state.questions.map((e) => {
                    return (
                        <h1 key={e.id}>{e.id} - {e.title}</h1>
                    )
                })}
            </div>
        )
    }
}

export default QuestionIndexPage;