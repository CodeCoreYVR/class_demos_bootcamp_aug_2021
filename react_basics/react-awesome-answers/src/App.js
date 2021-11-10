import React, {Component} from 'react';
import './App.css';
// import QuestionShowPage from './components/QuestionShowPage';
// import QuestionIndexPage from './components/QuestionIndexPage';
import CurrentDateTime from './components/CurrentDateTime';

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
      clocksCount: [1] //an array of something
    }
  }
  render(){
    return(
      <div>
        {
          this.state.clocksCount.map((count, index) => {
            return <CurrentDateTime key={index} shouldShowTime={true}/>
          })
        }
      </div>
      
    )
  }
}

export default App;
