import React from 'react';
import SectionHeader from '../SectionHeader';
import Product from './Product';

const Shop = () => {
  const products = [
    {
      id: 1,
      title: 'Kettlebell - 5kg',
      price: '$89.99',
      image: '/src/assets/purchase1.jpg',
      alt: '5kg Kettlebell',
    },
    {
      id: 2,
      title: 'Treadmill',
      price: '$899.99',
      image: '/src/assets/purchase2.jpg',
      alt: 'Treadmill',
    },
    {
      id: 3,
      title: 'Adjustable Dumbbell',
      price: '$129.99',
      image: '/src/assets/purchase3.jpg',
      alt: 'Adjustable Dumbbell',
    },
    {
      id: 4,
      title: 'Kettlebell - 3kg',
      price: '$69.99',
      image: '/src/assets/purchase4.jpg',
      alt: '3kg Kettlebell',
    },
  ];

  return (
    <section id="shop" className="shop-wrapper">
      <SectionHeader
        title="Buy From Us"
        text="Equip yourself with top-quality fitness gear from our store. We offer a wide range of products to support your training and help you stay motivated."
      />
      <div className="products__container">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            alt={product.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Shop;
