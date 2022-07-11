import { useNavigation } from '@react-navigation/native';
import {
  selectError,
  selectLoading,
} from 'containers/AuthHelper/slice/selectors';
import useTheme from 'hooks/useTheme';
import { iteratorSymbol } from 'immer/dist/internal';
import { SCREENS } from 'navigators/constants';
import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ServiceCategoryComponent from './components/ServiceCategory';
import useServicesListSlice from './slice';
import { getServicesAction } from './slice/actions';
import { selectServicesList } from './slice/selectors';

const ServiceCategoriesContainer: React.FC<IServiceCategoriesContainerProps> = (
  props,
) => {
  useServicesListSlice();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();
  const servicesList = useSelector(selectServicesList);

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getServicesAction({}));
  }, []);
  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            width: theme.dimensions.width,
            height: theme.dimensions.height,
          }}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        servicesList &&
        servicesList.length > 0 && (
          <>
            <FlatList
              data={servicesList}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item: { title, dataShown, data: services } }) => (
                <>
                  <ServiceCategoryComponent
                    onPress={() => {
                      navigation.navigate(
                        SCREENS.SERVIVES as never,
                        {
                          servicesList: services,
                        } as never,
                      );
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
export interface IServiceCategoriesContainerProps {}
export default ServiceCategoriesContainer;
