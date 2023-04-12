import React, { useState } from 'react';
import PropTypes from 'prop-types';
import imgRemove from '../../../assets/trash.png'
import "./style/styles.scss";

CartItem.propTypes = {
    cartItem: PropTypes.object,
};
CartItem.defaultProps = {
    cartItem: null,
}

function CartItem(props) {
    const { cartItem, handleToRemoveItem, handleGetCountNumber } = props;

    const [countNumber, setCountNumber] = useState(1)


    const handleToMinusClick = (id) => {
        let newCount = (countNumber - 1);
        setCountNumber(newCount)
        handleGetCountNumber(id, newCount)
    }

    const handleToPlusClick = (id) => {
        let newCount = countNumber + 1;
        setCountNumber(newCount)
        handleGetCountNumber(id, newCount)
    }

    const handleToRemoveClick = (id) => {
        handleToRemoveItem(id)
    }


    return (
        <div className='cart__item'>
            <div className="cart__item--left">
                <div className="cart__item__image"
                    style={{ backgroundColor: cartItem.color }}>
                    <img src={cartItem.image} alt="" />
                </div>
            </div>
            <div className="cart__item-right">
                <div className="cart__item__name">{cartItem.name}</div>
                <div className="cart__item__price">${cartItem.price}</div>
                <div className="cart__item__options">
                    <div className="cart__item__count">
                        <div className="button minus"
                            onClick={() => handleToMinusClick(cartItem.id)}>-</div>
                        <div className="count_number">{cartItem.countNumber}</div>
                        <div className="button plus"
                            onClick={() => handleToPlusClick(cartItem.id)}>+</div>
                    </div>
                    <div className="cart__item__remove">
                        <div className="button remove"
                            onClick={() => handleToRemoveClick(cartItem.id)}>
                            <img src={imgRemove} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CartItem;