import React, {Component} from 'react'
import {Trans} from 'react-i18next'
import {get} from 'lodash'
import {Text, View} from 'react-native'
import applyFilters from '_helpers/functions/filters'
export default class index extends Component {
  // handleChange(ev){
  //   console.log('chainging', ev)
  // }
  render() {
    let {field={}, label, styles, show, val_fun, mainValue=field.value} = this.props
    if (val_fun) {
      mainValue = applyFilters(val_fun, mainValue, {props: this.props})
    }
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}><Trans>{label}</Trans></Text>}
        <Text style={styles.input}>
          <Trans>{get(mainValue, show, mainValue)}</Trans>
        </Text>
      </View>
    )
  }
}
