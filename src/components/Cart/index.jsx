import React from 'react';
import PropTypes from 'prop-types';
import "./style/styles.scss";
import CartItem from './CartItem';

Cart.propTypes = {
    listCart: PropTypes.array,
};
Cart.defaultProps = {
    listCart: [],
}

function Cart(props) {
    const { listCart, handleToRemove, getCountNumber } = props;

    const handleToRemoveItem = (id) => {
        handleToRemove(id)
    }
    const handleGetCountNumber = (id, count) => {
        getCountNumber(id, count)
    }

    return (
        <div>
            {listCart.length === 0 ? (
                <div className='cart-empty'>
                    <p>
                        Your cart is empty.
                    </p>
                </div>
            ) : (
                <>
                    {listCart.map((item, idx) => (
                        <div key={item.id}>
                            <CartItem cartItem={item}
                                handleToRemoveItem={handleToRemoveItem}
                                handleGetCountNumber={handleGetCountNumber} />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default Cart;