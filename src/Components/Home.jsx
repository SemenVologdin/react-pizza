import React from 'react';

import Categories from './Categories';
import SortPopup from './SortPopup';
import { PizzaBlock } from './PizzaBlock';

export const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {data.map((obj) => (
          <PizzaBlock item={obj} />
        ))}
      </div>
    </div>
  );
};
