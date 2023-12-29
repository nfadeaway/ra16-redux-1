import React from 'react';
import {useSelector} from 'react-redux';
import Good from './Good.jsx';

const Goods = () => {

  const goods = useSelector(state => state.filteredGoods)

  return (
    <div className="goods">
      {goods.length > 0 && goods.map((good) =>
        <Good good={good}/>
      )}
    </div>
  );
};

export default Goods;