import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import useTheme from 'hooks/useTheme';
import {
  setStaffIdAction,
  toggleStaffFilterAction,
} from 'containers/StaffList/slice/actions';
import {
  selectSelectedStaffId,
  selectStaffFilterShown,
  selectStaffList,
} from 'containers/StaffList/slice/selectors';
import StaffMemberComponent from '../StaffMember';
import StaffListContainer from 'containers/StaffList';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import JSONTree from 'react-native-json-tree';

const StaffFilterCompnent: React.FC<IStaffFilterCompnentProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyle();
  /*** */
  const staffFilterShown = useSelector(selectStaffFilterShown);
  const staffList = useSelector(selectStaffList);
  const staffId = useSelector(selectSelectedStaffId);
  /*** */

  return (
    <>
      <StaffListContainer />
      <Modal
        style={{
          flex: 1,
          margin: 0,
        }}
        isVisible={staffFilterShown}
        useNativeDriver
        animationInTiming={500}
        animationOutTiming={500}
        animationIn="slideInRight"
        animationOut="slideOutRight">
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.leftPannel}
            onPress={() => {
              dispatch(toggleStaffFilterAction());
            }}></TouchableOpacity>
          <View
            style={[
              styles.container,
              {
                paddingTop: theme.insets.top,
                paddingBottom: theme.insets.bottom,
              },
            ]}>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => {
                dispatch(toggleStaffFilterAction());
              }}>
              <Fontisto name="close" size={25} />
            </TouchableOpacity>

            <Text style={{ fontWeight: 'bold', fontSize: 18, padding: 10 }}>
              Team Members
            </Text>
            <FlatList
              data={[
                {
                  id: 'all',
                  avatar: '',
                  full_name: 'All members',
                  selected: staffId == 'all',
                  state: 'active',
                },
              ]
                .concat(staffList)
                .filter((item) => item.state != 'inactive')}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <>
                    <StaffMemberComponent
                      id={item.id}
                      avatar={item.avatar}
                      full_name={item.full_name}
                      onPressStaffMember={() => {
                        dispatch(toggleStaffFilterAction());
                        dispatch(setStaffIdAction(item.id));
                      }}
                      selected={item.id == staffId}
                    />
                  </>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const makeStyle = makeStyleSheet((theme) => ({
  container: {
    backgroundColor: '#f8f8f8',
    flex: 0.8,
    ...theme.defaultShadow,
  },
  leftPannel: { flex: 0.2 },
  closeIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
}));
export interface IStaffFilterCompnentProps {}
export default StaffFilterCompnent;
