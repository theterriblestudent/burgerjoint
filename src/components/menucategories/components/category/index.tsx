import React from 'react';
import Image from "next/image";

interface CategoryPropsInterface {
    image: string;
    title: string;
};

const Category = ({image, title} : CategoryPropsInterface) : JSX.Element => {
  return (
    <div className="menu-category-card">
        <Image width={550} height={480} src={image} alt={title} />
        <div className="name">
            <h2>{title}</h2>
        </div>
    </div>
  );
}

export default Category;