import React, {Component} from 'react';
import NewQuestionForm from './NewQuestionForm';
import { Question } from '../requests';

class NewQuestionPage extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: [] };
      this.createQuestion = this.createQuestion.bind(this);
    }
    // Because NewQuestionPage is being renderd by a Route component provided by React-Router-Dom
    // It will recieve the history, location, and match properties
    createQuestion(params) {
      console.log(`Params: ${params.title} ${params.body}`)
      Question.create(params)
        .then((question) => {
          console.log(`question: ${question.errors}`)
          if (question.errors) {
            console.log(`QuestionErrors: ${question.errors}`)
            this.setState({ errors: question.errors });
          } else {
  
            // const id = question.id;
            // the history prop contains methods used to navigate
            this.props.history.push(`/questions/${question.id}`);
          }
        })
    }
  
    render(){
      return(
        <div>
          <NewQuestionForm createQuestion={this.createQuestion} errors={this.state.errors}/>
        </div>
      )
    }
  
  }
  
  export default NewQuestionPage;
