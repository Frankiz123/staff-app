import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import StaffMemberComponent from 'containers/AppointmentsList/components/StaffMember';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import StaffListContainer from 'containers/StaffList';
import { getStaffAction } from 'containers/StaffList/slice/actions';
import {
  selectStaffList,
  selectLoading,
} from 'containers/StaffList/slice/selectors';

const StaffListScreen: React.FC<IStaffListScreenProps> = (props) => {
  const dispatch = useDispatch();
  const staffList = useSelector(selectStaffList);
  const loading = useSelector(selectLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && user.reference_data) {
      dispatch(getStaffAction({ salon_id: user.reference_data.salon }));
    }
  }, [user]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StaffListContainer />
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={staffList.filter((item) => item.state != 'inactive')}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <>
                <StaffMemberComponent
                  id={item.id}
                  avatar={item.avatar}
                  full_name={item.full_name}
                  email={item.email}
                  phone={item.phone}
                  onPressStaffMember={() => {
                    Alert.alert('Handle Staff Member Click');
                  }}
                  selected={false}
                />
              </>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};
export interface IStaffListScreenProps {}
export default StaffListScreen;
