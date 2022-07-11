import React from 'react';
import { SafeAreaView } from 'react-native';
// import ServicesListComponent from 'containers/ServicesList/components/ServicesList';
import ServicesListContainer from 'containers/ServicesList';

const ServicesScreen: React.FC<IServicesScreenProps> = ({}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ServicesListContainer onServiceSelected={(service) => {}} />
    </SafeAreaView>
  );
};
export interface IServicesScreenProps {}
export default ServicesScreen;
