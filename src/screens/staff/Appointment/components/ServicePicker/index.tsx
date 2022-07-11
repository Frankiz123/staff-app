import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServicesListContainer from 'containers/ServicesList';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { selectServices } from 'containers/CurrentBooking/slice/selectors';
import {
  addSelectedServiceAction,
  deleteSelectedServiceAction,
} from 'containers/CurrentBooking/slice/actions';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from '../../messages';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import Modal from 'react-native-modal';
import { IBookingService } from 'containers/currentBooking/slice/types';

const ServicePickerComponent: React.FC<IServicePickerComponentProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();

  const currency = useSelector(selectCurrency);
  const services = useSelector(selectServices);

  const [serviceListvisibe, setServiceListvisibe] = useState(false);
  const [servicePriceInsertVisible, setServicePriceInsertVisible] =
    useState(false);
  const [modalService, setModalService] = useState<any>({});

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <FormattedMessage
        options={messages.services.options}
        scope={messages.services.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      {services.length !== 0 && (
        <>
          {services.map((service: IBookingService, index: number) => {
            return (
              <View
                key={`${service.id}-${index}`}
                style={{
                  paddingHorizontal: theme.space.m,
                  paddingVertical: theme.space.xxs,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    flex: 1,
                  }}>{`${service.category_title} | ${service.service_title}`}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: 'black' }}>{`${
                    currency?.prefix
                  }${parseInt(service.price)}${currency?.suffix}`}</Text>
                  <TouchableOpacity
                    style={{ paddingHorizontal: theme.space.s }}
                    onPress={() => {
                      dispatch(deleteSelectedServiceAction(index));
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
          {services.length === 0 ? (
            <FormattedMessage
              options={messages.addAService.options}
              scope={messages.addAService.scope}
              style={{}}
            />
          ) : (
            <FormattedMessage
              options={messages.addAnotherService.options}
              scope={messages.addAnotherService.scope}
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
            options={messages.services.options}
            scope={messages.services.scope}
            style={{
              padding: theme.space.m,
              fontWeight: 'bold',
            }}
          />
          <ServicesListContainer
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
          />
        </View>
      </BottomSheet>
      <Modal
        isVisible={servicePriceInsertVisible}
        onBackButtonPress={() => {
          setServicePriceInsertVisible(false);
        }}
        onBackdropPress={() => {
          setServicePriceInsertVisible(false);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: theme.space.s,
            paddingBottom: theme.insets.bottom + theme.space.s,
            borderRadius: theme.space.s,
          }}>
          <View style={{ padding: theme.space.s }}>
            <FormattedMessage
              {...messages.selectPrice}
              style={styles.cancelText}
            />
            <TextInput
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                padding: theme.space.s,
                margin: theme.space.s,
                borderRadius: 5,
              }}
              placeholder={'Price'}
              onChangeText={(value) =>
                setModalService({ ...modalService, price: value })
              }
              keyboardType="numeric"
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setServicePriceInsertVisible(false)}>
                <FormattedMessage
                  {...messages.cancel}
                  style={styles.cancelText}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                  setServicePriceInsertVisible(false);
                  dispatch(addSelectedServiceAction(modalService));
                }}>
                <FormattedMessage {...messages.save} style={styles.saveText} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  saveButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelText: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
  saveText: { textAlign: 'center', color: 'white' },
}));

export interface IServicePickerComponentProps {}
export default ServicePickerComponent;
