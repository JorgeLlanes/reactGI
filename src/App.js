import "./App.css";
import React, { Component } from "react";
import BasicInfo from "./BasicInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "John",
          age: 24,
          dob: "2/16/98",
          state: "Texas",
          city: "Austin",
        },
        {
          name: "Mike",
          age: 26,
          dob: "2/4/95",
          state: "California",
          city: "Orange County",
        },
        {
          name: "Steph",
          age: 23,
          dob: "2/10/99",
          state: "Arizona",
          city: "Phoenix ",
        },
      ],
    };
  }
  render() {
    const human = this.state.person.map((person) => {
      return (
        <BasicInfo
          name={person.name}
          age={person.age}
          dob={person.dob}
          state={person.state}
          city={person.city}
        />
      );
    });
    return (
      <div className="App">
        <h1 className="BI">Basic Information:</h1>
        {human}
      </div>
    );
  }
}

export default App;
