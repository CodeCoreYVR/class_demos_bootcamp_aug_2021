import React, { useState, useEffect } from 'react';
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
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import AuthContext from './context/auth-context';
import NotFoundPage from './components/NotFoundPage';
import GiftUserPage from './components/GiftUserPage'

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) {
        setUser(user)
      }
    })
  }
  const onSignOut = () => { setUser(null) }
  return (
    <AuthContext.Provider value={{ user: user }}>
      <BrowserRouter>
        <NavBar currentUser={user} onSignOut={onSignOut} />
        <Switch>
          <Route exact path='/sign_in'
            render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}>
          </Route>
          <Route
            exact path='/sign_up'
            render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />}
          >
          </Route>
          <Route exact path='/questions' component={QuestionIndexPage} />
          <AuthRoute isAuthenticated={!!user} path='/questions/new' component={NewQuestionPage}></AuthRoute>
          <Route path='/questions/:id' component={QuestionShowPage} ></Route>
          <Route path='/use_state' component={UseStateHook} />
          <Route path='/use_effect' component={UseEffectHook} />
          <Route path='/gift/:id' component={GiftUserPage} />
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider >
  )
}
