import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products : [
                {
                    price: 1000,
                    title: 'Mobile Phone',
                    Qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 100,
                    title: 'Watch',
                    Qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 100000,
                    title: 'Personal computer',
                    Qty: 1,
                    img: '',
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

    render(){
        const { products } = this.state;
        return (
            <div className="cart">
                {/* {// arr.map( (item) => { return item + 5}) } */}
                
                { products.map( (product) => {
                    return (
                        <CartItem product={product} 
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}

                        // func={ () => console.log('sdsd')}
                        // isloggedin={false}
                        // jsx={<h1>Test</h1>}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Cart;

