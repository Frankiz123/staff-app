import React, { useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import useCoursesListSlice from './slice';
import { getCoursesAction } from './slice/actions';
import { selectCourses, selectLoading } from './slice/selectors';
import useTheme from 'hooks/useTheme';
import JSONTree from 'react-native-json-tree';
import { selectClient } from 'containers/CurrentBooking/slice/selectors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import CourseComponent from './components';
import { addSelectedCourseAction } from 'containers/CurrentBooking/slice/actions';

const CoursesListContainer: React.FC<ICoursesListContainerProps> = ({
  onCourseSelected,
}) => {
  useCoursesListSlice();

  const dispatch = useDispatch();
  const theme = useTheme();
  const user = useSelector(selectUser);
  const client = useSelector(selectClient);
  const loading = useSelector(selectLoading);
  const courses = useSelector(selectCourses);

  useEffect(() => {
    client &&
      dispatch(
        getCoursesAction({
          salon_id: user.reference_data.salon,
          client_id: client.id,
        }),
      );
  }, [client]);
  return (
    <>
      {loading ? (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size={'large'} color={theme.colors.primary} />
        </View>
      ) : (
        <>
          {/* <JSONTree hideRoot data={{ courses }} /> */}
          <FlatList
            data={courses}
            keyExtractor={(course) => course.client_course_sid}
            renderItem={({ item: course }) => (
              <>
                <CourseComponent
                  title={course.title}
                  session_no={course.session_no}
                  price={parseFloat(course.course_installments_total).toFixed(
                    0,
                  )}
                  onCourseSelected={() => {
                    onCourseSelected(course);
                  }}
                />
              </>
            )}
          />
        </>
      )}
    </>
  );
};
export interface ICoursesListContainerProps {
  onCourseSelected: (course: any) => void;
}
export default CoursesListContainer;
