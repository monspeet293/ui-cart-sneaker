import React from 'react';
import PropTypes from 'prop-types';
import "./style/styles.scss";
import classnames from 'classnames';
import imgChecked from '../../../assets/check.png'

ProductItem.propTypes = {
    productItem: PropTypes.object,
    selectedIdList: PropTypes.array

};
ProductItem.defaultProps = {
    productItem: null,
    selectedIdList: []
}

function ProductItem(props) {
    const { productItem, handleGetItem, selectedIdList } = props;

    let temp = selectedIdList.find(item => item === productItem.id)
    const check = !temp;
    const handleToSelectClick = (id) => {
        handleGetItem(id)
    }


    return (
        <div className='product__item'>
            <div className="item__image" style={{ backgroundColor: productItem.color }}>
                <img src={productItem.image} alt="" />
            </div>
            <div className="item__name">{productItem.name}</div>
            <div className="item__description">{productItem.description}</div>
            <div className="item__bottom">
                <div className="item__price">${productItem.price}</div>
                <div className={classnames({
                    'item__button': true,
                    'selected-btn': !check
                })}
                    onClick={() => handleToSelectClick(productItem.id)}>
                    <p className={classnames({
                        selected: !check
                    })} >ADD TO CART</p>
                    <img src={imgChecked}
                        className={classnames({
                            inactive: check,
                            active: !check
                        })} alt="" />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;