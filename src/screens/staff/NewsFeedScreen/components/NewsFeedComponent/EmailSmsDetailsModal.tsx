import React from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import { FormattedMessage } from 'components/FormattedMessage';
import messages from './messages';

const { height: HEIGHT } = Dimensions.get('window');

const EmailSmsDetailsModal = ({ isOpen, onClose, details }: any) => {
  const { clientName, sender, receiver, dateSent, subject, message } = details;

  return (
    <Modal visible={isOpen} transparent>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.closeBackground} onPress={onClose} />

        <ScrollView style={Styles.detailsContainer}>
          {sender !== undefined && (
            <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
              <FormattedMessage style={{}} {...messages.from} />
              {sender}
            </Text>
          )}

          {subject !== undefined && (
            <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
              <FormattedMessage style={{}} {...messages.subject} />
              {subject}
            </Text>
          )}

          {receiver !== undefined && (
            <Text style={[{ marginBottom: 5, color: 'black' }, {}]}>
              <FormattedMessage style={{}} {...messages.to} />
              {receiver}
            </Text>
          )}
          {message !== undefined && (
            <>
              <Text style={{ color: 'black' }}>
                <FormattedMessage style={{}} {...messages.message} />
              </Text>
              <Text style={{ color: 'black' }}>{message}</Text>
            </>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center' },
  closeBackground: {
    position: 'absolute',
    top: 0,

    width: '100%',
    height: '100%',

    backgroundColor: '#00000070',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '90%',
    maxHeight: HEIGHT * 0.8,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
  },
});

export { EmailSmsDetailsModal };
