const React = require("react");
const ReactDom = require("react-dom");

const App = () => {
  return (
    <ul>
      <li>foo</li>
      <li>bar</li>
      <li>baz</li>
    </ul>
  );
};

const rootEl = document.getElementById("root");
console.time();
ReactDom.render(<App />, rootEl);
console.timeEnd();
