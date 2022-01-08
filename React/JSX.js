// Boiler:

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line

    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
// Change code below this line


// Challenge:
  //Initialize the component with state in the constructor
  // and assign your name to a property of name.

// Solution:

this.state = {
  name: 'Amal'
}
