// Boiler:

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items />
    { /* Change code above this line */ }
  }
};


// Challenge:
  // Override the default prop by passing in a value of 10 for quantity.

    return <Items quantity={10}/>
