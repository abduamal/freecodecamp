// Boiler:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line

    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};


// Challenge:
  //In the MyComponent render method, define a const called name and set
  // it equal to the name value in the component's state.
  //Next, in the return statement, render this value in an h1 tag using the variable name.

// Solution:

// Change code below this line
const name = this.state.name
// Change code above this line
return (
  <div>
    { /* Change code below this line */ }
    <h1>{name}</h1>
    { /* Change code above this line */ }
  </div>
)
