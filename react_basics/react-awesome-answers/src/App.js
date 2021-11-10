import React, {Component} from 'react';
import './App.css';
// import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
// import CurrentDateTime from './components/CurrentDateTime';
import { Session } from './requests'

// function App() {
//   return (
//     <div>
//       <QuestionIndexPage />
//       <QuestionShowPage />
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // clocksCount: [1], //an array of something
      user: null
    }
  }

  componentDidMount(){
    Session.create({
      email: 'admin@user.com',
      password: '123'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }
  render(){
    return(
      <QuestionIndexPage />  
    )
  }
}

export default App;
