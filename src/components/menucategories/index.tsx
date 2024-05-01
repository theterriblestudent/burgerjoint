import React from 'react';
import Image from 'next/image';
import Category from './components/category';

const MenuCategories = () => {
  return (
    <section className='full-width container-grid'>
      <h1 className="font-asap text-3xl sm:text-5xl md:text-[52px] text-black font-bold uppercase mb-4 sm:mb-9">Browse Menu Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-[3fr_2fr_2fr] gap-4 sm:gap-5 lg:gap-10">
        <Category image="/images/specials.jpg"  title="Todays Specials"/>
        <Category image="/images/burgers.jpg"  title="Burgers"/>
        <Category image="/images/fried-chicken.jpg"  title="Fried Chicken"/>
        <Category image="/images/sides.jpg"  title="Sides"/>
        <Category image="/images/dessert.jpg"  title="Dessert"/>
      </div>
    </section>
  )
}

export default MenuCategories;