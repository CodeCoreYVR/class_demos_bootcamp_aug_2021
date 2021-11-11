import React, { Component } from "react";
import AnswerList from "./AnswerList";
import QuestionDetails from './QuestionDetails';
// import questionData from '../mock_data/questionData';
import {Question} from '../requests';

class QuestionShowPage extends Component {
    // this
    constructor(props) {
        // if you are using a class component and you want to access `this` then you have to call super(props)
        super(props);
        // this.state = questionData;
        // this.deleteAnswer = this.deleteAnswer.bind(this)
        this.state = { stateQuestion: {} }

        this.deleteAnswer = this.deleteAnswer.bind(this);
    }

    componentDidMount(){
       Question.show(this.props.match.params.id) //not hard coded anymore because we have access to params through router
       .then((fetchedAPIQuestion) => {
           this.setState((state) => {
               return {
                   stateQuestion: fetchedAPIQuestion
               }
           })
       }) 
    }

    componentDidUpdate(){
        console.log('the state has been updated with the fetched data')
    }

    deleteAnswer(id) {
        this.setState(
            { answers: this.state.stateQuestion.answers.filter(a => a.id !== id) }
        )
    }
    render() {
        const { title, body, author, view_count, created_at } = this.state.stateQuestion;
        return (
            <div>
                <QuestionDetails
                    name={title}
                    body={body}
                    view_count={view_count}
                    created_at={new Date(created_at)}
                    author={author}
                />

                <AnswerList list={this.state.stateQuestion.answers} deleteAnswer={(id) => this.deleteAnswer(id)} />
            </div>
        )
    }
}


export default QuestionShowPage;
