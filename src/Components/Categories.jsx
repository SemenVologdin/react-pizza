import React from 'react';

const Categories = () => {
  const [category, setCategory] = React.useState({ active: 1 });

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={`${item}_${index}`}
              className={category.active === index ? 'active' : null}
              onClick={() => {
                setCategory({ active: index });
              }}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
