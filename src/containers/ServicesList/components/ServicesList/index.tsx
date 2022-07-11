import React from 'react';
import { Alert, FlatList } from 'react-native';
import ServiceComponent from '../Service';

const ServicesListComponent: React.FC<IServicesListComponentProps> = ({
  servicesList,
}) => {
  return (
    <>
      {/* <JSONTree hideRoot data={{ servicesList, loading, error }} /> */}
      {servicesList && servicesList.length > 0 && (
        <FlatList
          data={servicesList}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <>
              <ServiceComponent
                title={item.service_title}
                duration={`${item.duration} min`}
                price={parseInt(item.price)}
                onServiceSelected={() => {}}
              />
            </>
          )}
        />
      )}
    </>
  );
};
export interface IServicesListComponentProps {
  servicesList: Array<any>;
}
export default ServicesListComponent;
