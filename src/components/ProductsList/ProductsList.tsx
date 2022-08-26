import axios from 'axios';
import { useQuery } from 'react-query';
import { DisplayProducts, ProductCard } from './ProductsListElements';

export default function List() {
  const { data } = useQuery('productList', async () => {
    const response = await axios.get(
      'https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC'
    );
    return response.data;
  });

  return (
    <DisplayProducts>
      {data?.products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            img={product.photo}
            title={product.name}
            overview={product.description}
          />
        );
      })}
    </DisplayProducts>
  );
}
