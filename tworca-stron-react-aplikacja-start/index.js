class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false,
    };
  }

  showMoreContent() {
    this.setState({ showContent: true });
  }

  render() {
    return (
      <div>
        <h2> {this.props.title} </h2>{" "}
        {this.state.showContent ? (
          <p> {this.props.content} </p>
        ) : (
          <>
            <p> {this.props.shortContent} </p>{" "}
            <button onClick={() => this.showMoreContent()}>
              {" "}
              Czytaj więcej{" "}
            </button>{" "}
          </>
        )}{" "}
        <hr />
      </div>
    );
  }
}

const Blog = function () {
  const posts = [
    {
      title: "Przepis na naleśniki",
      shortContent: "Na naturalnym mleku...",
      content: "mleko, jajka zmieszać...",
      id: 2,
    },
    {
      title: "Przepis na kurczaka",
      shortContent: "Na ostro...",
      content: "pokroić kurczaka, usmażyć...",
      id: 3,
    },
  ];

  const postsList = posts.map((el) => <Post key={el.id} {...el} />);

  return (
    <div>
      <p> To jest blog o gotowaniu </p> {postsList}{" "}
    </div>
  );
};

ReactDOM.render(<Blog />, document.getElementById("root"));
