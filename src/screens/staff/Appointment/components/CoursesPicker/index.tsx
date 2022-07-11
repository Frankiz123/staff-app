import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import useTheme from 'hooks/useTheme';
import { BottomSheet } from 'components/BottomSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ServicesListContainer from 'containers/ServicesList';
import { selectCurrency } from 'containers/CurrencyHelper/slice/selectors';
import { selectCourses } from 'containers/CurrentBooking/slice/selectors';
import {
  addSelectedCourseAction,
  addSelectedServiceAction,
  deleteSelectedCourseAction,
  deleteSelectedServiceAction,
} from 'containers/CurrentBooking/slice/actions';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from '../../messages';
import courseComponentMessages from 'containers/CoursesList/components/messages';
import CoursesListContainer from 'containers/CoursesList';
import CourseComponent from 'containers/CoursesList/components';
import JSONTree from 'react-native-json-tree';
import { translate } from 'i18n';
import { IBookingCourse } from 'containers/currentBooking/slice/types';

const CoursePickerComponent: React.FC<ICoursePickerComponentProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const currency = useSelector(selectCurrency);
  const courses = useSelector(selectCourses);
  const [courseListvisibe, setCoursesListvisibe] = useState(false);

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <FormattedMessage
        options={messages.courses.options}
        scope={messages.courses.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      {courses.length !== 0 && (
        <>
          {courses.map((course: IBookingCourse, index: number) => {
            return (
              <View
                key={`${course.id}-${index}`}
                style={{
                  paddingHorizontal: theme.space.m,
                  paddingVertical: theme.space.xxs,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <JSONTree hideRoot data={{ course }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ color: 'black' }}>{`${course.title}`}</Text>
                  <Text style={{ color: 'grey' }}>
                    {translate(
                      courseComponentMessages.sessionNo.scope,
                      courseComponentMessages.sessionNo.options,
                    )}{' '}
                    {course.session_no}
                  </Text>
                </View>
                <Text style={{ color: 'black' }}>{`${
                  currency?.prefix
                }${parseFloat(course.course_installments_total).toFixed(0)}${
                  currency?.suffix
                }`}</Text>
                <TouchableOpacity
                  style={{ paddingHorizontal: theme.space.s }}
                  onPress={() => {
                    dispatch(deleteSelectedCourseAction(index));
                  }}>
                  <FontAwesome
                    name={'minus-circle'}
                    size={25}
                    style={{ color: 'red' }}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </>
      )}
      <TouchableOpacity
        onPress={() => {
          setCoursesListvisibe(true);
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
          {courses.length === 0 ? (
            <FormattedMessage
              options={messages.addACourse.options}
              scope={messages.addACourse.scope}
              style={{}}
            />
          ) : (
            <FormattedMessage
              options={messages.addAnotherCourse.options}
              scope={messages.addAnotherCourse.scope}
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
        visible={courseListvisibe}
        onBackButtonPress={() => {
          setCoursesListvisibe(false);
        }}
        onBackdropPress={() => {
          setCoursesListvisibe(false);
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
            options={messages.courses.options}
            scope={messages.courses.scope}
            style={{
              padding: theme.space.m,
              fontWeight: 'bold',
            }}
          />
          <CoursesListContainer
            onCourseSelected={(course: IBookingCourse) => {
              setCoursesListvisibe(false);
              dispatch(addSelectedCourseAction(course));
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};
export interface ICoursePickerComponentProps {}
export default CoursePickerComponent;
