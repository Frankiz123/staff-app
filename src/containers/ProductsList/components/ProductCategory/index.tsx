import styles from 'components/Separator/styles';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { makeStyleSheet } from 'theme/makeStyleSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Separator = () => (
  <View
    style={{
      height: 0.5,
      backgroundColor: '#00000070',
      marginHorizontal: 20,
    }}></View>
);

const ProductCategoryComponent: React.FC<IProductCategoryComponentProps> = ({
  title,
  onPress,
}) => {
  const styles = makeStyles();

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const makeStyles = makeStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    padding: theme.space.s,
    backgroundColor: 'white',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.large,
    color: 'black',
  },
}));

export interface IProductCategoryComponentProps {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
export default ProductCategoryComponent;
