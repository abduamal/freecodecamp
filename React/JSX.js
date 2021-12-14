// Boiler:
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
// Challenge:
  // Use the ReactDOM.render() method to render this component to the page.
  // Use document.getElementById() to select the DOM node to render them to.
  // There is a div with id='challenge-node' available for you to use.
// Solution:
  ReactDOM.render(JSX, document.getElementById('challenge-node'));
