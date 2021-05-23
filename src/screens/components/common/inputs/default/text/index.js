import {mapValues, pick} from 'lodash';
import React, {Component} from 'react'
import {Input} from 'react-native-elements';
import applyFilters from '_helpers/functions/filters'
import withInput from '_helpers/wrap/funs/input'
// import omits from '_helpers/data/mainProps';
class Text extends Component {
  // handleChange(ev){
  //   console.log('chainging', ev)
  // }
  render() {
    const {field={}, styles, extras={}, onChange, mainValue=field.value, ...props} = this.props
    const extraProps = mapValues(extras, (d)=>(d.key ? applyFilters(d, undefined, {prop: this.props}):d));
    const mainProps = pick(props, ['labelStyle', 'inputContainerStyle', 'multiline', 'maxlength', 'numberOfLines', 'label', 'blurOnSubmit'])
    return (
      <Input
        style={styles.container}
        textAlignVertical="top"
        {...mainProps}
        {...extraProps}
        onChangeText={onChange}
        value={mainValue}
      />
    )
  }
}

export default withInput(Text)
