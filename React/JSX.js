// Boiler:
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line

// Challenge:
  //Define a class MyComponent that extends React.Component.
  //Its render method should return a div that contains an h1 tag with the text: My First React Component! in it.
// Solution:
// Change code below this line

class MyComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
