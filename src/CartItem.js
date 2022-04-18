import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            Qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        this.testing()
    }

    increaseQuantity = () => {
        // this.state.Qty += 1;
        // console.log('this', this.state);

        // setState form 1
        // this.setState({
        //     Qty : this.state.Qty + 1
        // });

        
        // this.setState( (prevState) => {
        //     return {
        //         Qty : prevState.Qty + 2
        //     }
        // }, () => {
        //     console.log(this.state.Qty)
        // });

        // setState form 2 - if prevState required use this
        this.setState( (prevState) => {
            return {
                Qty : prevState.Qty + 1            
            }
        });
    }

    testing(){
        const promise = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve('done');
            },5000);
        });

        promise.then( () => {
            // setState acts like a synchronous call
            this.setState({ qty: this.state.Qty + 10});

            this.setState({ qty: this.state.Qty + 10});

            this.setState({ qty: this.state.Qty + 10});

            console.log('this.state', this.state);
        });
    }

    decreaseQuantity = () => {
        const {Qty} = this.state;

        if(Qty === 0){
            return;
        }
        
        this.setState( (prevState) => {
            return {
                Qty : this.state.Qty - 1
            }
        });
    }

    render (){
        console.log('render');

        const {price, title, Qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty {Qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img  
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}