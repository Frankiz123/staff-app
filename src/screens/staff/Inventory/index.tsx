import React from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import ProductsListContainer from 'containers/ProductsList';

const InventoryScreen: React.FC<IInventoryScreenProps> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ProductsListContainer onProductSelected={() => {}} />
    </View>
  );
};
export interface IInventoryScreenProps {}
export default InventoryScreen;
