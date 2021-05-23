import React, {Component, Fragment} from 'react'
import {isEmpty, isString} from 'lodash';
import {Text, StyleSheet} from 'react-native'
import {Trans} from 'react-i18next'
import appStyles from 'app-global-styles.json'
export const styles = StyleSheet.create({
  main: {
    color: appStyles.colors.error,
    marginHorizontal: 5,
  },
})
class Error extends Component {
  render() {
    const {error, touched} = this.props;
    if (isEmpty(error) || !isString(error)) {
      return <Fragment></Fragment>
    }
    return (
      <Text style={styles.main}>
        {touched && error &&<Trans>{error}</Trans>}
      </Text>
    )
  }
}
export default Error
