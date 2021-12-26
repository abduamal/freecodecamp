// Boiler:
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
// Challenge:
  //Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you behind the scenes.
  // Next, nest the Fruits class component into the TypesOfFood component, below the h1 heading element and above Vegetables
// Solution:
const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      { /* Change code below this line */ }
      <NonCitrus/>
      <Citrus/>
      { /* Change code above this line */ }
    </div>
  );
}

  class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits/>
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
}
