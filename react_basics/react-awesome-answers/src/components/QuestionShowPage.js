import React, { Component } from "react";
import AnswerList from "./AnswerList";
import QuestionDetails from './QuestionDetails';
// import questionData from '../mock_data/questionData';
import {Question} from '../requests'

class QuestionShowPage extends Component {
    // this
    constructor(props) {
        // if you are using a class component and you want to access `this` then you have to call super(props)
        super(props);
        // this.state = questionData;
        // this.deleteAnswer = this.deleteAnswer.bind(this)
        this.state = { stateQuestion: {} }
    }

    componentDidMount(){
       Question.show(18) //just hard coded to fetch question 18 for now
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
            { answers: this.state.answers.filter(a => a.id !== id) }
        )
    }
    render() {
        return (
            <div>
                <QuestionDetails
                    name={this.state.title}
                    body={this.state.body}
                    view_count={this.state.view_count}
                    created_at={new Date(this.state.created_at)}
                    author={this.state.author}
                />

                <AnswerList list={this.state.answers} deleteAnswer={(id) => this.deleteAnswer(id)} />
            </div>
        )
    }
}


export default QuestionShowPage;
