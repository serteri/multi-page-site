
var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      { className: 'main' },
      'Second Content'
    )
  );
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));