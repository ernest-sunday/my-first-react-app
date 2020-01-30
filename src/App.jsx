import React from "react";
import "./App.css";


export const App = () => {
  return(
    <div className= {'my-app'}>
      <h1>Hello world</h1>
      <p>This is my new begining</p>
      <p>The things i will like to learn are...</p>
      <ul>
        <li>state in react</li>
        <li>forms</li>
        <li>Styling</li>
        <li>props</li>
      </ul>
    </div>
  )
}


function App2() {
  return(
    <div className= {'text'}>
      <h1>Hello world</h1>
      <p>This is my new begining</p>
      <p>The things i will like to learn are...</p>
      <ul>
        <li>state in react</li>
        <li>forms</li>
        <li>Styling</li>
        <li>props</li>
      </ul>
    </div>
  )
}

export default App2


export class DateTimeNow extends React.Component {
  render () {
    const dateTimeNow= new Date().toLocaleString()
  return <div>The current time in your state is {dateTimeNow}</div>
  }
}
