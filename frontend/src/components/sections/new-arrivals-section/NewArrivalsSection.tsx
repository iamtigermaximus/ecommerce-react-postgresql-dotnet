import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHook';
import { fetchAllProducts } from '../../../redux/reducers/productSlice';
import {
  ProductCardsContainer,
  SectionContainer,
  SectionName,
  SectionNameContainer,
} from '../new-arrivals-section/NewArrivalsSection.styles';
import ProductCard from '../../product-card/ProductCard';

const NewArrivalsSection = () => {
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <SectionContainer maxWidth={false}>
      <SectionNameContainer>
        <SectionName variant="h6">New Arrivals</SectionName>
      </SectionNameContainer>
      <ProductCardsContainer>
        {products.length > 0 &&
          products
            .slice(1, 7)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ProductCardsContainer>
    </SectionContainer>
  );
};

export default NewArrivalsSection;
