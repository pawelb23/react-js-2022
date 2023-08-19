import { useState } from "react";
import React from "react";
import "./App.css";

const BlogTitle = (props) => {
  return (
    <div>
      <h1>{props.mainTitle}</h1>
      <hr />
      <hr />
    </div>
  );
};

class SiteInfo extends React.Component {
  constructor(props) {
    super(props);
    this.infoText = "Blog info";
  }
  render() {
    return (
      <div className="bottom-info">
        <h4>{this.infoText}</h4>
      </div>
    );
  }
}

class IdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.info = true;
  }
  render() {
    return <h5>ID: {this.props.idNumber}</h5>;
  }
}

const Title = (props) => {
  return <h2>{props.value}</h2>;
};

const Post = (props) => {
  const [showContent, setShowContent] = useState(false);
  const showMoreContent = () => {
    setShowContent(!showContent); //ustawiamy wartość na przeciwną do tej, która była do tej pory
    //(np. z false na true)
  };
  const linkInfo = (event) => {
    event.preventDefault(); //sam element <button></button> nie potrzebuje event.preventDefault(),
    //zaś element link <a href=""></a>, wymaga tego eventu,
    //aby strona nie przeładowywała się po kliknięciu w link niepotrzebnie
    console.log("klik");
  };

  return (
    <div>
      {/* <h2>{props.title}</h2> */}
      <Title value={props.title} />
      <p>{props.shortContent}</p>
      {showContent ? (
        <div>
          <p>{props.content}</p>
          <IdInfo idNumber={props.id} />
          <p></p>
        </div>
      ) : null}
      <button onClick={showMoreContent}>
        {showContent ? "Zwiń tekst" : "Czytaj więcej"}
      </button>
      <br />
      <a href="#root" onClick={linkInfo}>
        Link
      </a>
      <hr />
      {/* <hr /> albo <hr></hr>, <br /> albo <br></br> --- Wszystkie tagi w React JS muszą być zamknięte*/}
    </div>
  );
};

const Blog = () => {
  const postsArray = [
    {
      title: "Przepis na naleśniki",
      shortContent: "Na naturalnym mleku...",
      content: "mleko, jajka, zamieszać, ...",
      id: 1,
    },
    {
      title: "Przepis na kurczaka",
      shortContent: "Na ostro...",
      content: "pokroić kurczaka, usmażyć, ...",
      id: 2,
    },
  ];

  const postsList = postsArray.map((postElem) => {
    return (
      <Post
        key={postElem.id}
        // title={postElem.title}
        // content={postElem.content}
        // showContent={postElem.showContent}
        // shortContent={postElem.shortContent}
        {...postElem} //Ten zapis zastępuje cały powyższy zapis, uwaga!!! key={postElem.id} musi zostać
      />
    );
  });

  return (
    <div>
      <BlogTitle mainTitle="To jest Blog o gotowaniu" />
      {postsList}
      <br />
      <SiteInfo />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Blog />
    </div>
  );
}

export default App;
