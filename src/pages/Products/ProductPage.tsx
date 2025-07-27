import SideFilter from '@/(components)/Filter/SideFilter/SideFilter';
import Products from '@/(components)/Products/Products';

const ProductsPage = () => {
  return (
    <>
      <div>
        <SideFilter />
        <Products />
      </div>
    </>
  );
};
export default ProductsPage;
