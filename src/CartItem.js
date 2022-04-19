import React from "react";

const CartItem = (props) => {
    
        // console.log('this.props', this.props);

        const {price, title, Qty, img} = props.product;
        const {product, 
               onDecreaseQuantity, 
               onIncreaseQuantity, 
               onDeleteProduct} = props;
        return (
            <div className="cart-item">
                {/* {this.props.jsx} */}
                <div className="left-block">
                    <img style={styles.image} src={img}/>
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
                            onClick={() => {onIncreaseQuantity(product)}}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                            onClick={ () => {onDecreaseQuantity(product)}}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/04/92/30/88/1000_F_492308833_xXc7hxGdBrk3OQtb9NKCKq0s1hZ40PC6.jpg"
                            onClick={ () => {onDeleteProduct(product.id)}}
                        />
                    </div>
                </div>
            </div>
        );
    
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


// decreaseQuantity = () => {
    //     const {Qty} = this.state;
    //     if(Qty === 0){
    //         return;
    //     }
    //     this.setState( (prevState) => {
    //         return {
    //             Qty : this.state.Qty - 1
    //         }
    //     });
    // }