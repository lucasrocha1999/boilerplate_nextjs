import React, { useState, useEffect } from 'react';
import { Title } from '../styles/Pages/Home';

interface IProject {
  id: string,
  title: string
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProject>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      });
    });
  }, []);

  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  )
}
