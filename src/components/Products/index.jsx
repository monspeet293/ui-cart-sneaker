import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import DATA from '../../data/shoes.json'
import "./style/styles.scss";


Products.propTypes = {
    selectedIdList: PropTypes.array
};
Products.defaultProps = {
    selectedIdList: []
}

function Products(props) {
    const { getItem, selectedIdList } = props;
    const products = DATA.shoes;
    const handleGetItem = (id, price) => {
        getItem(id, price)
    }
    return (
        <div>
            <ul className='product__item'>
                {products.map((item, idx) => (
                    <li key={item.id}>
                        <ProductItem productItem={item}
                            handleGetItem={handleGetItem}
                            selectedIdList={selectedIdList} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;