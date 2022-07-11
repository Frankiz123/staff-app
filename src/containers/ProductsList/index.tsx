import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import useTheme from 'hooks/useTheme';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import JSONTree from 'react-native-json-tree';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './components/Product';
import ProductCategoryComponent from './components/ProductCategory';
import useProductsListSlice from './slice';
import { getProductsAction, getProductCategoriesAction } from './slice/actions';
import { GET_PRODUCTS_LIMIT } from './slice/constants';
import {
  makeSelectProductCategories,
  makeSelectFormattedProducts,
  makeSelectProducts,
  makeSelectLoading,
} from './slice/selectors';

const ProductsListContainer: React.FC<IProductsListContainerProps> = ({
  onProductSelected,
}) => {
  useProductsListSlice();
  const dispatch = useDispatch();
  const theme = useTheme();

  // const products = useSelector(makeSelectProducts);
  const loading = useSelector(makeSelectLoading);
  const formattedProducts = useSelector(makeSelectFormattedProducts);

  useEffect(() => {
    formattedProducts.length == 0 && dispatch(getProductCategoriesAction());
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      {loading.productCategories || loading.products ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        formattedProducts &&
        formattedProducts.length > 0 && (
          <SectionList
            sections={formattedProducts}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, section }) => (
              <>
                <ProductComponent
                  title={item.title}
                  price={parseInt(item.price)}
                  onProductSelected={() => {
                    onProductSelected(item);
                  }}
                />
              </>
            )}
            SectionSeparatorComponent={() => (
              <View
                style={{
                  marginVertical: theme.space.xxs,
                  backgroundColor: 'white',
                }}
              />
            )}
            renderSectionHeader={({ section }) => (
              <>
                <ProductCategoryComponent
                  onPress={() => {}}
                  title={section.title}
                />
              </>
            )}
          />
        )
      )}
    </View>
  );
};
export interface IProductsListContainerProps {
  onProductSelected: (product: any) => void;
}
export default ProductsListContainer;
