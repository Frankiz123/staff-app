import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as RNEAvatar, Accessory } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

function Avatar({ uri, title, size, style, ...rest }: any) {
  return (
    <RNEAvatar
      ImageComponent={FastImage}
      source={{ uri }}
      title={title?.toUpperCase() || ''}
      size={size}
      rounded
      style={style}
      {...rest}></RNEAvatar>
  );
}

Avatar.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  accessory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
};

Avatar.defaultProps = { size: 'medium' };

export default Avatar;
