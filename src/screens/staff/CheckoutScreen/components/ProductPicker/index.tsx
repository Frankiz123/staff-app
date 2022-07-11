import { FormattedMessage } from 'components/FormattedMessage';
import { selectProducts } from 'containers/CurrentBooking/slice/selectors';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import messages from '../../messages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomSheet } from 'components/BottomSheet';
import ProductsListContainer from 'containers/ProductsList';
import {
  addSelectedProductAction,
  deleteSelectedProductAction,
} from 'containers/CurrentBooking/slice/actions';
import { IBookingProduct } from 'containers/currentBooking/slice/types';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
const ProductPickerComponent: React.FC<IProductPickerComponentProps> = (
  props,
) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [serviceListvisibe, setServiceListvisibe] = useState(false);
  const products = useSelector(selectProducts);
  const currency = useSelector(selectCurrency);

  return (
    <>
      <>
        <View style={{ paddingVertical: theme.space.s }}>
          <FormattedMessage
            options={messages.products.options}
            scope={messages.products.scope}
            style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
          />
          {products.length !== 0 && (
            <>
              {products.map((product: IBookingProduct, index: number) => {
                return (
                  <View
                    key={`${product.id}-${index}`}
                    style={{
                      paddingHorizontal: theme.space.m,
                      paddingVertical: theme.space.xxs,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ flex: 1 }}>{product.title}</Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: 'black' }}>{`${
                        currency?.prefix
                      }${parseInt(product.price + '')}${
                        currency?.suffix
                      }`}</Text>
                      <TouchableOpacity
                        style={{ paddingHorizontal: theme.space.s }}
                        onPress={() => {
                          dispatch(deleteSelectedProductAction(index));
                        }}>
                        <FontAwesome
                          name={'minus-circle'}
                          size={25}
                          style={{ color: 'red' }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </>
          )}
          <TouchableOpacity
            onPress={() => {
              setServiceListvisibe(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              padding: 10,
            }}>
            <>
              {products.length === 0 ? (
                <FormattedMessage
                  options={messages.addAProduct.options}
                  scope={messages.addAProduct.scope}
                  style={{}}
                />
              ) : (
                <FormattedMessage
                  options={messages.addAnotherProduct.options}
                  scope={messages.addAnotherProduct.scope}
                  style={{}}
                />
              )}
              <MaterialCommunityIcons
                name={'chevron-down'}
                size={25}
                style={{ color: 'black' }}
              />
            </>
          </TouchableOpacity>
          <BottomSheet
            visible={serviceListvisibe}
            onBackButtonPress={() => {
              setServiceListvisibe(false);
            }}
            onBackdropPress={() => {
              setServiceListvisibe(false);
            }}>
            <View
              style={{
                backgroundColor: 'white',
                paddingTop: theme.space.s,
                paddingBottom: theme.insets.bottom + theme.space.s,
                borderTopLeftRadius: theme.space.s,
                borderTopRightRadius: theme.space.s,
                maxHeight: theme.dimensions.height - 200,
              }}>
              <FormattedMessage
                options={messages.products.options}
                scope={messages.products.scope}
                style={{
                  padding: theme.space.m,
                  fontWeight: 'bold',
                }}
              />
              <ProductsListContainer
                onProductSelected={(product) => {
                  setServiceListvisibe(false);

                  dispatch(addSelectedProductAction(product));
                }}
              />
              {/* <ServicesListContainer
                onServiceSelected={(service: IBookingService) => {
                  setServiceListvisibe(false);
                  if (
                    service.open_price_enabled === '1' &&
                    parseInt(service.price) == 0
                  ) {
                    setModalService(service);
                    setTimeout(() => {
                      setServicePriceInsertVisible(true);
                    }, 500);
                  } else {
                    dispatch(addSelectedServiceAction(service));
                  }
                }}
              /> */}
            </View>
          </BottomSheet>
        </View>
      </>
    </>
  );
};
export interface IProductPickerComponentProps {}
export default ProductPickerComponent;
