import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import { getTasksLabelsSuccessAction } from 'containers/TaskAndNotes/slice/actions';
import { selectTaskLabels } from 'containers/TaskAndNotes/slice/selectors';
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

const LabelPickerComponent: React.FC<ILabelPickerComponentProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const labels = useSelector(selectTaskLabels);
  const [labelPickerVisble, setlabelPickerVisble] = useState(false);

  return (
    <>
      <FormattedMessage
        options={messages.labels.options}
        scope={messages.labels.scope}
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
          options={messages.assignLabels.options}
          scope={messages.assignLabels.scope}
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
        {labels
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
            {labels.map((label: any) => {
              return (
                <Chip
                  key={label?.id}
                  value={label?.name}
                  showIcon={false}
                  containerStyle={{}}
                  textStyle={{ fontSize: 14 }}
                  onPress={() => {
                    dispatch(
                      getTasksLabelsSuccessAction(
                        labels.map((lbl: any) =>
                          lbl.id == label.id
                            ? { ...lbl, selected: !lbl.selected }
                            : lbl,
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
export interface ILabelPickerComponentProps {}
export default LabelPickerComponent;
