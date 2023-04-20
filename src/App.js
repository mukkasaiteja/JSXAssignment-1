import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Topics covered</h1>
      <h3>
        The following is a list of all the topics we cover in the MDN learning
        area.
      </h3>
      <h3 className="headline">Getting started with the web</h3>
      <h4>
        Provides a practical introduction to web development for complete
        beginners.
      </h4>
      <h3 className="headline">HTML-Structuring the web</h3>
      <h4>
        HTML is the language that we use to structure the different parts of our
        content and define what their meaning or purpose is. This topic teaches
        HTML in detail.
      </h4>
      <h3 className="headline">CSS Styling the web</h3>
      <h4>
        CSS is the language that we use to control our web content's style and
        layout, as well as adding behavior like animation. This topic provides
        comprehensive coverage of CSS.
      </h4>
    </div>
  );
}
