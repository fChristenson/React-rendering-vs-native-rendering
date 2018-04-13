const React = require("react");
const ReactDom = require("react-dom");

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(i);
}

const App = () => {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

const rootEl = document.getElementById("root");
console.time();
ReactDom.render(<App />, rootEl);
console.timeEnd();
