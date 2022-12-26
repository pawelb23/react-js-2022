import React from "react";
import "./App.css";

//-----

// const Button = (props) => {
//   return (
//     <button onClick={() => props.update(`New app name ${Date.now()}`)}>
//       update
//     </button>
//   );
// };

//-----

function FormattedDate(props) {
  return <h2>Jest godzina: {props.date}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <h1>Czas</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Clock />
      {/* <Button update={this.update.bind(this)} /> */}
    </div>
  );
}

export default App;
