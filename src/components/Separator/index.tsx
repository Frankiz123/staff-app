import React from 'react'
import { View, ViewPropTypes } from 'react-native'
import styles from './styles'

const Separator = ({ style, ...rest }) => {
  return <View style={[styles.separator, style]} {...rest} />
}

Separator.propTypes = { style: ViewPropTypes.style }
Separator.defaultProps = { style: null }

export default Separator