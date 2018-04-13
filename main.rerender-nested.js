const React = require("react");
const ReactDom = require("react-dom");

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(i);
}

function deepNest(content, times) {
  if (times === 0) {
    return <span>{content}</span>;
  } else {
    return deepNest(<span>{content}</span>, --times);
  }
}

const App = () => {
  return (
    <ul>
      {items.map(item => <li key={item}>{deepNest(item, 100)}</li>)}
    </ul>
  );
};

const rootEl = document.getElementById("root");
console.time();
ReactDom.render(<App />, rootEl);
console.timeEnd();
