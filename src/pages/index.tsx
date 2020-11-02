import { GetServerSideProps } from 'next';
import { Title } from '../styles/Pages/Home';

interface IProject {
  id: string,
  title: string
}

interface HomeProps {
  recommendedProducts: IProject[];
}

export default function Home({ recommendedProducts }: HomeProps) {
  // Client Side Rendering
  // useEffect(() => {
  //   fetch('http://localhost:3333/recommended').then(response => {
  //     response.json().then(data => {
  //       setRecommendedProducts(data);
  //     });
  //   });
  // }, []);

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

// Server Side Rendering
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
