import {omit} from 'lodash';
import React, {Component} from 'react'
import {Input} from 'react-native-elements';
import withInput from '_helpers/components/wrap/input/'
class Text extends Component {
  // handleChange(ev){
  //   console.log('chainging', ev)
  // }
  render() {
    const {field={}, extra={}, onChange, mainValue=field.value, ...props} = this.props
    const mainProps = omit(props, ['form', 'component', 'meta', 'styles'])
    return (
      <Input
        {...mainProps}
        {...extra}
        onChangeText={onChange}
        value={mainValue}
      />
    )
  }
}

export default withInput(Text)
