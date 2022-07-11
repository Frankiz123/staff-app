export interface ProductsListState {
  products: Array<any>;
  productCategories: Array<any>;
  formattedProducts: Array<any>;
  loading: { products: boolean; productCategories: boolean };
  error: { products: any; productCategories: any };
}
