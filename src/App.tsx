import React from 'react';

import './App.css';
import Description from './components/Description';
import Photo from './components/Photo';
import Review from './components/Review';
import { DiscountContext } from './contexts/DiscountContext';

function App() {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log('added to cart...' + e)
  }

  const benefit = [ "updated course", "React Hooks included", "completed course"]

  return (
    <DiscountContext.Provider value={{isDiscount: true}}>
      <div className="ParentBox">
        <Photo />
        <Description 
          category="Frontend" 
          info="Course Belajar React.JS dari pemula hingga mahir" 
          price="IDR 1.500.000" 
          title="Belajar React.JS"
          onClick={e =>handleClick(e)}
          benefits={
            benefit.map(item => (
              <li key={item}>{item}</li>
            ))
          }
        />
        <Review />

      </div>
    </DiscountContext.Provider>
  );
}

export default App;
