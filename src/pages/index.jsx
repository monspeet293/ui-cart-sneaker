import React, { useState } from 'react';
import AppCard from '../common/AppCard';
import DATA from '../data/shoes.json'
import "./style/styles.scss";


function ShopView(props) {
    const newProducts = DATA.shoes;
    newProducts.map((item) => {
        item.countNumber = 1;
    });
    const products = newProducts.map((item) => item)

    const [selectedIdList, setSelectedIdList] = useState([])
    const [listCart, setListCart] = useState([])
    const [totalCart, setTotalCart] = useState(0)


    const handleGetItem = (id) => {
        handleGetIdList(id);
        const list = handleGetListCart();
        handleGetTotalCart(list);
    }

    const handleGetIdList = (id) => {
        const newSelectedIdList = selectedIdList;
        newSelectedIdList.push(id);
        setSelectedIdList(newSelectedIdList);
    }
    const handleGetListCart = () => {
        const newListCart = [];
        selectedIdList.forEach((id) => {
            newListCart.push(products[id - 1]);
        });
        setListCart(newListCart);
        return newListCart;
    }
    const handleGetTotalCart = (list) => {
        let newTotalCart = 0;
        const newListCart = list;
        newListCart.map((item) => {
            newTotalCart += item.price * item.countNumber
        })

        setTotalCart(newTotalCart)
    }

    const handleGetCountNumber = (id, count) => {
        if (count === 0) {
            handleToRemove(id);
            return
        }
        const index = selectedIdList.indexOf(id);
        const newListCart = [...listCart];
        newListCart[index] = {
            ...newListCart[index],
            countNumber: count
        }
        setListCart(newListCart);
        handleGetTotalCart(newListCart);
    }

    const handleToRemove = (id) => {
        const newSelectedIdList = selectedIdList;
        const index = newSelectedIdList.indexOf(id);
        newSelectedIdList.splice(index, 1)
        setSelectedIdList(newSelectedIdList);
        const list = handleGetListCart();
        handleGetTotalCart(list);
    }

    return (
        <div className='container'>
            <AppCard isProducts={true}
                getItem={handleGetItem}
                selectedIdList={selectedIdList} />
            <AppCard isProducts={false}
                listCart={listCart}
                totalCart={totalCart}
                handleToRemoveItem={handleToRemove}
                handleGetCountNumber={handleGetCountNumber} />
        </div>
    );
}

export default ShopView;