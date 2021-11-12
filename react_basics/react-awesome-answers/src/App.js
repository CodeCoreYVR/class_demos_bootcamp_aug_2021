import React, {Component} from 'react';
import './App.css';
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
// import CurrentDateTime from './components/CurrentDateTime';
// import { Session } from './requests';
import { User } from './requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';


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
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      //This is the safe navigation opreator
      //Similar to user && user.id
      if (user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  onSignOut = () => { this.setState( { user : null })}

  render(){
    return(
     
      <BrowserRouter>
            <NavBar currentUser={this.state.user} onSignOut={this.onSignOut}/>
            <Switch>
              <Route exact path ='/sign_in' 
              render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>}>
              </Route>
            <Route exact path='/questions' component={QuestionIndexPage} />  
            <Route path='/questions/new' component={NewQuestionPage}></Route>  
            <Route path='/questions/:id' component={QuestionShowPage} ></Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
            </Switch>
      </BrowserRouter>
      
    )
  }
}

//The "*" has special meaning here. It will match only when no other routes do.

export default App;
