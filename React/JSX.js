// Boiler:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};


// Challenge:
  // Define an h1 tag in the component's render method which renders the value
   // of name from the component's state.

// Solution:

<h1>{this.state.name}</h1>
