import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'
import Home from './hero/page';
const Homepage = async() => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <Home />
      {/* <ProductList data={latestProducts} title="Newest Arrivals" limit={4}/> */}
    </>
  );
} 

export default Homepage;
