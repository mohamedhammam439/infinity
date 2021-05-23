import React, {Component} from 'react'
import {CheckBox} from 'react-native-elements'
import {withTranslation} from 'react-i18next';
import withInput from '_helpers/wrap/funs/input'
import {omit} from 'lodash';
class Boolean extends Component {
  render() {
    const {field={}, onChange, mainValue=field.value, check={}, t, ...props} = this.props
    const mainProps = omit(props, ['form', 'component', 'meta'])
    return (
      <CheckBox {...mainProps} title={t(check.label)} checked={mainValue} onPress={()=>(onChange(field.value))} name={field.name} />
    )
  }
}

export default withTranslation()(withInput(Boolean))
