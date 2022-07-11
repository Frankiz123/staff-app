import ServiceCategoriesContainer from 'containers/ServicesList/ServiceCategoriesContainer';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const ServiceCategoriesScreen: React.FC<IServiceCategoriesScreenProps> = (
  props,
) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ServiceCategoriesContainer />
    </SafeAreaView>
  );
};
export interface IServiceCategoriesScreenProps {}
export default ServiceCategoriesScreen;
