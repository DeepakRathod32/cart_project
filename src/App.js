import Cart from './Cart';
import React from 'react'
import Navbar from './Navbar';
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
            {
                price: 1000,
                title: 'Mobile Phone',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1554672408-730436b60dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id: 1
            },
            {
                price: 100,
                title: 'Watch',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 2
            },
            {
                price: 100000,
                title: 'Personal computer',
                Qty: 1,
                img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id: 3
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing()
}
handleIncreaseQuantity = (product) => {
    console.log('Heyy plz inc the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].Qty += 1;

    this.setState({
        products: products
    });
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;

    const index = products.indexOf(product);
    
    if(products[index].Qty === 0){
        return;
    }

    products[index].Qty -= 1;
    
    this.setState({
        products : products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter( (item) => { return item.id !== id}); //[{}]

    this.setState({
        products : items
    });
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach( (product) => {
    count += product.Qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;

  let total = 0;

  products.forEach( (product) => {
    total = total + product.price*product.Qty;
  })

  return total;
}

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 15} }> <h1>TOTAL: {this.getCartTotal()}</h1> </div>
      </div>
    );
  }
}

export default App;
