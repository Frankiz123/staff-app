import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SectionList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import JSONTree from 'react-native-json-tree';
import useTheme from 'hooks/useTheme';
import ServiceComponent from './components/Service';
import ServiceCategoryComponent from './components/ServiceCategory';
import useServicesListSlice from './slice';
import { getServicesAction, toggleServicesAction } from './slice/actions';
import {
  selectError,
  selectLoading,
  selectServicesList,
} from './slice/selectors';

const ServicesListContainer: React.FC<IServicesListContainerProps> = ({
  onServiceSelected,
}) => {
  useServicesListSlice();
  const dispatch = useDispatch();
  const theme = useTheme();

  const servicesList = useSelector(selectServicesList);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (!servicesList || servicesList.length == 0) {
      dispatch(getServicesAction({}));
    }
  }, []);

  return (
    <>
      {/* <JSONTree hideRoot data={{ servicesList, loading, error }} /> */}
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.primary} />
      ) : (
        servicesList &&
        servicesList.length > 0 && (
          <>
            <SectionList
              sections={servicesList}
              keyExtractor={(item, index) => item + index}
              renderItem={({
                item,
                section: { dataShown, title: sectionTitle },
              }) => (
                <>
                  <ServiceComponent
                    title={item.service_title}
                    duration={`${item.duration} min`}
                    price={parseInt(item.price)}
                    onServiceSelected={() => {
                      onServiceSelected(item);
                    }}
                  />
                </>
              )}
              SectionSeparatorComponent={() => (
                <View style={{ marginVertical: theme.space.xxs }} />
              )}
              renderSectionHeader={({ section: { title, dataShown } }) => (
                <>
                  <ServiceCategoryComponent
                    onPress={() => {
                      //   dispatch(toggleServicesAction(title));
                    }}
                    dataShown={dataShown}
                    title={title}
                  />
                </>
              )}
            />
          </>
        )
      )}
    </>
  );
};
export interface IServicesListContainerProps {
  onServiceSelected: (service: any) => void;
}
export default ServicesListContainer;
