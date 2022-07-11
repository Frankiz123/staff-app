import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import {
  changeSearchTextAction,
  getTasksAction,
  getTasksCategoriesSuccessAction,
  getTasksLabelsSuccessAction,
} from 'containers/TaskAndNotes/slice/actions';
import {
  selectSearchText,
  selectTaskCategories,
  selectTaskLabels,
  selectTaskList,
} from 'containers/TaskAndNotes/slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Chip from '../Chip';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useTheme from 'hooks/useTheme';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import { BottomSheet } from 'components/BottomSheet';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from '../../messages';
import { translate } from 'i18n';

const TasksFilterComponent: React.FC<ITasksFilterComponentProps> = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const styles = makeStyles();

  const searchText = useSelector(selectSearchText);
  const categories = useSelector(selectTaskCategories);
  const labels = useSelector(selectTaskLabels);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={{ paddingHorizontal: theme.space.m }}
        onPress={() => setVisible(true)}>
        <AntDesign name="filter" size={25} color={theme.colors.primary} />
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: theme.space.s,
            paddingBottom: theme.insets.bottom + theme.space.s,
            borderTopLeftRadius: theme.space.s,
            borderTopRightRadius: theme.space.s,
            maxHeight: theme.dimensions.height - 100,
          }}>
          <TextInput
            multiline
            defaultValue={searchText}
            placeholder={translate(
              messages.searchBy.scope,
              messages.searchBy.options,
            )}
            placeholderTextColor={'grey'}
            style={{
              padding: theme.space.s,
              paddingTop: theme.space.m,
              borderRadius: theme.space.xxs,
              borderColor: 'grey',
              borderWidth: 1,
              minHeight: 30,
              justifyContent: 'center',
              textAlignVertical: 'center',
              margin: theme.space.s,
            }}
            onChangeText={(text) => {
              dispatch(changeSearchTextAction(text));
            }}
          />
          <Text
            style={{
              marginBottom: theme.space.s,
            }}>
            <FormattedMessage
              options={messages.labels.options}
              scope={messages.labels.scope}
              style={{
                marginBottom: theme.space.s,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            />{' '}
            ({labels.length})
          </Text>
          <View style={styles.choicesContainer}>
            {labels.map((label: any) => {
              return (
                <Chip
                  key={label?.id}
                  value={label?.name}
                  showIcon={false}
                  containerStyle={styles.choice}
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

          <Text
            style={{
              marginBottom: theme.space.s,
            }}>
            <FormattedMessage
              options={messages.stages.options}
              scope={messages.stages.scope}
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            />{' '}
            ({categories.length})
          </Text>
          <View style={styles.choicesContainer}>
            {categories.map((label: any) => {
              return (
                <Chip
                  key={label?.id}
                  value={label?.name}
                  showIcon={false}
                  containerStyle={styles.choice}
                  textStyle={{ fontSize: 14 }}
                  onPress={() => {
                    dispatch(
                      getTasksCategoriesSuccessAction(
                        categories.map((lbl: any) =>
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
                  color={theme.colors.primary || 'blue'}
                  isSelected={label.selected}
                  shouldHighlightValue={label.selected}
                />
              );
            })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                dispatch(
                  getTasksCategoriesSuccessAction(
                    categories.map((lbl: any) => ({ ...lbl, selected: false })),
                  ),
                );
                dispatch(
                  getTasksLabelsSuccessAction(
                    labels.map((lbl: any) => ({ ...lbl, selected: false })),
                  ),
                );
                dispatch(changeSearchTextAction(''));
                setVisible(false);
              }}>
              <FormattedMessage
                {...messages.clearFilter}
                style={styles.cancelText}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                dispatch(getTasksAction());
                setVisible(false);
              }}>
              <FormattedMessage {...messages.apply} style={styles.saveText} />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  choicesContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: theme.space.s,
  },
  choice: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  saveButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelButton: {
    flex: 1,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    marginHorizontal: theme.space.s,
    borderRadius: theme.space.xxs,
    padding: theme.space.s,
  },
  cancelText: {
    color: theme.colors.primary,
    textAlign: 'center',
  },
  saveText: { textAlign: 'center', color: 'white' },
}));

export interface ITasksFilterComponentProps {}
export default TasksFilterComponent;
