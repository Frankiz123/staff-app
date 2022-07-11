import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { makeStyleSheet } from 'utils/makeStyleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Separator = () => (
  <View
    style={{
      height: 0.5,
      backgroundColor: '#00000070',
      marginHorizontal: 20,
    }}></View>
);

const ProductComponent: React.FC<IProductComponentProps> = ({
  title,

  price,
  onProductSelected,
}) => {
  const styles = makeStyles();
  const currency = useSelector(selectCurrency);

  return (
    <>
      <TouchableOpacity onPress={onProductSelected} style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={{ color: 'black' }}>{title}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'black' }}>
            {currency?.prefix}
            {price}
            {currency?.suffix}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            style={{ color: 'black' }}
          />
        </View>
      </TouchableOpacity>
      <Separator />
    </>
  );
};
const makeStyles = makeStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    padding: theme.space.s,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
}));

export interface IProductComponentProps {
  title: string;
  price: number;
  onProductSelected: (product: any) => void;
}
export default ProductComponent;
