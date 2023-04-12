import React from 'react';
import PropTypes from 'prop-types';
import "./style/styles.scss";
import logo from '../../assets/nike.png'
import Products from '../../components/Products';
import Cart from '../../components/Cart';


AppCard.propTypes = {
    isProducts: PropTypes.bool.isRequired,
    listCart: PropTypes.array,
    totalCart: PropTypes.number,
    selectedIdList: PropTypes.array
};
AppCard.defaultProps = {
    listCart: [],
    totalCart: 0,
    selectedIdList: []
}

function AppCard(props) {
    const { isProducts,
        listCart,
        totalCart,
        getItem,
        handleToRemoveItem,
        handleGetCountNumber,
        selectedIdList } = props;

    const handleGetItem = (id) => {
        getItem(id)
    }

    const handleToRemove = (id) => {
        handleToRemoveItem(id)
    }
    const getCountNumber = (id, count) => {
        handleGetCountNumber(id, count)
    }

    return (
        <div className='card-wrapper'>
            <div className='card_top'>
                <img className='card_top__logo' src={logo} alt="" />
            </div>
            {isProducts ? (
                <>
                    <div className='card_title'>Our Products</div>
                    <div className='card_content'>
                        <Products getItem={handleGetItem} selectedIdList={selectedIdList} />
                    </div>
                </>
            ) : (
                <>
                    <div className='card_title'>
                        Your cart
                        <span>${Math.round((totalCart) * 100) / 100}</span>
                    </div>
                    <div className='card_content'>
                        <Cart listCart={listCart}
                            handleToRemove={handleToRemove}
                            getCountNumber={getCountNumber} />
                    </div>
                </>
            )}
        </div>
    );
}

export default AppCard;