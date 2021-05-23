import React, {Component} from 'react'
import {connect} from 'react-redux'
import {get, map} from 'lodash'
import mapDispatchToProps from '_helpers/actions/main'
import {Trans} from 'react-i18next'
import {Text, View} from 'react-native'
import {Picker} from 'react-native'
import withInput from '_helpers/wrap/funs/input'
// import {Picker} from '@react-native-picker/picker';

class MainSelect extends Component {
  renderOptions() {
    const {list, select={}} = this.props;
    const {label='name', value='id'} = select
    return map(list, (d, k)=>(
      <Picker.Item key={k} value={get(d, value, k)} label={String(get(d, label, d))}></Picker.Item>
    ))
  }
  render() {
    const {field={}, label, init_label='Please Select', mainValue=field.value, styles={}, onChange} = this.props
    return (
      <View style={styles?.container}>
        {label && <Text style={styles.label}><Trans>{label}</Trans></Text>}
        <Picker
          style={styles.input}
          selectedValue={mainValue || ''}
          onValueChange={onChange}>
          <Picker.Item value={''} label={init_label}></Picker.Item>

          {this.renderOptions()}
        </Picker>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => ({
  list: props.data || get(state, `${props.reduxName}.data`, get(state, props.path, {})),
})


export default connect(mapStateToProps, mapDispatchToProps)(withInput(MainSelect))
