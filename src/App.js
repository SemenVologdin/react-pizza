import React from 'react';

import Header from './Components/Header';
import { Home } from './Components/Home';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((result) => setPizzas(result.pizzas));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home data={pizzas} />
        </div>
      </div>
    </div>
  );
}

export default App;
