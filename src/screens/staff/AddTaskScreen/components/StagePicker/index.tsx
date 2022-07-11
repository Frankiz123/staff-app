import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import {
  getTasksCategoriesSuccessAction,
  getTasksLabelsSuccessAction,
} from 'containers/TaskAndNotes/slice/actions';
import {
  selectTaskCategories,
  selectTaskLabels,
} from 'containers/TaskAndNotes/slice/selectors';
import useTheme from 'hooks/useTheme';
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Chip from 'screens/staff/TaskListScreen/components/Chip';
import messages from '../../messages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StagePickerComponent: React.FC<IStagePickerComponentProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const categories = useSelector(selectTaskCategories);
  const [labelPickerVisble, setlabelPickerVisble] = useState(false);

  return (
    <>
      <FormattedMessage
        options={messages.stages.options}
        scope={messages.stages.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      <TouchableOpacity
        onPress={() => {
          setlabelPickerVisble(true);
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <FormattedMessage
          options={messages.setStage.options}
          scope={messages.setStage.scope}
          style={{}}
        />

        <MaterialCommunityIcons
          name={'chevron-down'}
          size={25}
          style={{ color: 'black' }}
        />
      </TouchableOpacity>
      <View
        style={{
          borderRadius: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
          //   paddingBottom: theme.space.s,
          paddingTop: theme.space.s,
        }}>
        {categories
          .filter((label: any) => label.selected)
          .map((label: any) => {
            return (
              <Chip
                key={label?.id}
                value={label?.name}
                showIcon={false}
                containerStyle={{}}
                textStyle={{ fontSize: 14 }}
                onPress={() => {
                  setlabelPickerVisble(true);
                }}
                alwaysShowIcon={label.selected}
                iconPosition="left"
                inactiveColor="grey"
                color={label?.color}
                isSelected={label.selected}
                shouldHighlightValue={label.selected}
              />
            );
          })}
      </View>
      <BottomSheet
        visible={labelPickerVisble}
        onBackButtonPress={() => {
          setlabelPickerVisble(!labelPickerVisble);
        }}
        onBackdropPress={() => {
          setlabelPickerVisble(!labelPickerVisble);
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
            options={messages.labels.options}
            scope={messages.labels.scope}
            style={{
              padding: theme.space.s,
              fontWeight: 'bold',
            }}
          />

          <View
            style={{
              borderRadius: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
              //   paddingBottom: theme.space.s,
              padding: theme.space.s,
            }}>
            {categories.map((label: any) => {
              return (
                <Chip
                  key={label?.id}
                  value={label?.name}
                  showIcon={false}
                  containerStyle={{}}
                  textStyle={{ fontSize: 14 }}
                  onPress={() => {
                    dispatch(
                      getTasksCategoriesSuccessAction(
                        categories.map((lbl: any) =>
                          lbl.id == label.id
                            ? { ...lbl, selected: true }
                            : { ...lbl, selected: false },
                        ),
                      ),
                    );
                  }}
                  alwaysShowIcon={label.selected}
                  iconPosition="left"
                  inactiveColor="grey"
                  color={label?.color}
                  isSelected={label.selected}
                  shouldHighlightValue={label.selected}
                />
              );
            })}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};
export interface IStagePickerComponentProps {}
export default StagePickerComponent;
