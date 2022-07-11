import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from 'hooks/useTheme';
import { translate } from 'i18n';
import { FormattedMessage } from 'components/FormattedMessage';
import { setNotesAction } from 'containers/CurrentBooking/slice/actions';
import { selectNotes } from 'containers/CurrentBooking/slice/selectors';
import messages from '../../messages';

const NotesInputComponent: React.FC<INotesInputComponentProps> = ({}) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const notes = useSelector(selectNotes);

  return (
    <View style={{ paddingVertical: theme.space.s }}>
      <FormattedMessage
        options={messages.notes.options}
        scope={messages.notes.scope}
        style={{ marginBottom: theme.space.s, fontWeight: 'bold' }}
      />
      <TextInput
        multiline
        defaultValue={notes}
        placeholder={translate(
          messages.NotesOnlyVisibleToStaff.scope,
          messages.NotesOnlyVisibleToStaff.options,
        )}
        placeholderTextColor={'grey'}
        style={{
          borderRadius: theme.space.xxs,
          borderColor: 'grey',
          borderWidth: 1,
          minHeight: 100,
          justifyContent: 'center',
          textAlignVertical: 'center',
        }}
        onChangeText={(text) => dispatch(setNotesAction(text))}
      />
    </View>
  );
};
export interface INotesInputComponentProps {}
export default NotesInputComponent;
