import React from "react";
import "./App.css";

const WelcomeReact = () => (
  <p className="font-size-welcome">React Szkolenie react-exercise-2022</p>
);

// function App() {
//   return (
//     <div className="App">
// <WelcomeReact />
//     </div>
//   );
// }
// Poniżej deklaracja stylów w pliku js bezpośrednio
const styles = {
  color: "red",
};

// Komponent bezstanowy
const StatelessComponent = () => (
  <section className="stateless-component">Komponent bezstanowy</section>
);

//---
// Komponent stanowy
class NameState extends React.Component {
  constructor() {
    super();
    this.state = { nameState: "Komponent stanowy" };
  }
  render() {
    return (
      <div>
        <section className="state-component">{this.state.nameState}</section>
      </div>
    );
  }
}

//---
// Przekazywanie parametrów pomiędzy komponentami

const StatelessComponentWithParameter = (props) => (
  <section className="stateless-component-with-parameter">{props.name}</section>
);

//Stateful Component --> na polski komponent stanowy
class StateComponentWithParameter extends React.Component {
  render() {
    return (
      <div>
        <section className="state-component-with-parameter">
          {this.props.name}
        </section>
      </div>
    );
  }
}

//---
// Przekazywanie funkcji do Komponentu

// const Button = (props) => {
//   return (
//     <button onClick={() => props.update(`New app name ${Date.now()}`)}>
//       update
//     </button>
//   );
// };

//----

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.info = "Klik!";
    this.divText = <div>Kliknięcie na Button uruchomiło ten Div</div>;
    this.state = { isDivON: false };

    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.showDiv = this.showDiv.bind(this);
  }
  showDiv() {
    this.setState((arg) => ({ isDivON: !arg.isDivON }));
  }

  render() {
    return (
      <>
        <button
          className={this.state.isDivON ? this.info : null} //dodajemy klasę Klik! przy dodawaniu Div'a
          onClick={this.showDiv}
        >
          {this.info}
        </button>
        {this.state.isDivON ? this.divText : null}
      </>
    );
  }
}

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.info = "Klik!";
//     this.divText = <div>Kliknięcie na Button uruchomiło ten Div</div>;
//     this.state = { isDivON: false };

//     // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
//     this.showDiv = this.showDiv.bind(this);
//   }
//   showDiv() {
//     this.setState((arg) => ({ isDivON: !arg.isDivON }));
//   }

//   render() {
//     return (
//       <>
//         <button
//           className={this.state.isDivON ? this.info : null} //dodajemy klasę Klik! przy dodawaniu Div'a
//           onClick={this.showDiv}
//         >
//           {this.info}
//         </button>
//         {this.state.isDivON ? this.divText : null}
//       </>
//     );
//   }
// }

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { update: <div className="dzial">Działa</div> };
//     this.abc = this.abc.bind(this);
//   }
//   abc() {
//     this.setState(() => {
//       return [this.state.update, console.log("działa")];
//     });
//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.abc}>update</button>
//       </>
//     );
//   }
// }
//---

// Wywołuje potomną funkcję zwrotną numTimes, aby powtórzyć wyświetlenie elementów
// Poniższy kod nie działa

// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   // return <div>{items}</div>;
//   return <div>działa?</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>To jest {index}. element listy</div>}{" "}
//     </Repeat>
//   );
// }

//------------

function FormattedDate(props) {
  return <h2>Jest godzina: {props.date.toLocaleTimeString()}.</h2>;
}

// const FormattedDate = (props) => {
//   return <h2>Jest godzina: {props.date.toLocaleTimeString()}.</h2>;
// };

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
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

//---

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "WŁĄCZONY" : "WYŁĄCZONY"}
      </button>
    );
  }
}

//---

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>----------------</h3>
        <h2 className="timer1">Odliczamy sekundy od zera!!!</h2>
        <h2 className="timer2">Seconds: {this.state.seconds}</h2>
        <h3>----------------</h3>
      </div>
    );
  }
}

//---

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar avatar-size"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

//---

function WarningBanner(props) {
  if (!props.warnFromFunction) {
    return null;
  }
  return (
    <div className="divFlex">
      <div className="warning">Ostrzeżenie!</div>
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.ukryj = "hide";
    this.pokaz = "show";
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warnFromFunction={this.state.showWarning} />
        <button
          className={this.state.showWarning ? this.ukryj : this.pokaz}
          onClick={this.handleToggleClick}
        >
          {this.state.showWarning
            ? this.ukryj[0].toUpperCase() + this.ukryj.substring(1)
            : this.pokaz[0].toUpperCase() + this.ukryj.substring(1)}
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <WelcomeReact />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Toggle />
        <Clock />
        <Timer />
        <section>Nasz pierwszy komponent...</section>
        <h1 className="red" style={styles}>
          Hello...
        </h1>
        <h1 className="green">Hello Css</h1>
        <StatelessComponent />
        <NameState />
        <StatelessComponentWithParameter name="Przekazanie parametru do Komponentu Bezstanowego" />
        <StateComponentWithParameter name="Przekazanie parametru do Komponentu Stanowego" />
        {/* <Button update={this.update.bind(this)} /> */}
        <Button />
        <div>Witaj, świecie</div>
        <Page />
      </>
    );
  }
}

export default App;

// window.scroll(0, 0);
