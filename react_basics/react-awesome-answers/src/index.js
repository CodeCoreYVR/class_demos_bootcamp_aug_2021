import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import QuestionShowPage from './components/QuestionShowPage';
import QuestionList from './components/QuestionList'

// ReactDOM.render(<QuestionDetails name="testname" />,
//   document.getElementById('root')
// );


ReactDOM.render(<QuestionList
  list={
    [
      { title: "What's ur favourite color?", body: "RED YELLOW BLUE", created_at: "2020-10-10", author: { full_name: "AAA" } },
      { title: "What r u doing?", body: "Nothing", created_at: "2019-10-10", author: { full_name: "BBB" } },
      { title: "What is this?", body: "A computer", created_at: "2018-10-10", author: { full_name: "CCC" } },
    ]
  }
/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
