import React, {Component} from 'react'
import {Trans} from 'react-i18next'
import {Text, View, TouchableOpacity} from 'react-native'
// import {Picker} from 'react-native'
import moment from 'moment'
import withInput from '_helpers/wrap/funs/input'
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import DatePicker from 'react-native-date-picker'

class DateComponent extends Component {
  state={show: false}
  onChange = (date)=>{
    this.setState({show: false})
    this.props.onChange(date)
  }
  openDate = ()=>{
    this.setState({show: true})
  }
  render() {
    const {show} = this.state
    const {field={}, format='LLL', mode='date', label, mainValue=field.value, extras, styles={}} = this.props
    // const mainProps = applyFilters(this.props.getExtras, )
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}><Trans>{label}</Trans></Text>}
        <TouchableOpacity onPress={this.openDate} style={styles.button}><Text>{mainValue ? moment(mainValue).format(format):'Please Select'}</Text></TouchableOpacity>
       
      </View>
    )
  }
}

export default withInput(DateComponent)
