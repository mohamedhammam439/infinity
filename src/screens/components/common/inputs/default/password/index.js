import {get, omit} from 'lodash';
import React, {Component} from 'react'
import {Input} from 'react-native-elements';
import withInput from '_helpers/wrap/funs/input'
// import appStyles from 'app-global-styles.json';
const icons = {
  'true': {
    type: 'entypo',
    name: 'eye-with-line',
  },
  'false': {
    type: 'entypo',
    name: 'eye',
  },
}
class Text extends Component {
  state= {
    secure: true,
  }
  changeSecure = ()=>{
    this.setState({secure: !this.state.secure})
  }
  // handleChange(ev){
  //   console.log('chainging', ev)
  // }
  render() {
    const {secure} = this.state
    const {field={}, extra={}, onChange, mainValue=field.value, ...props} = this.props
    const mainProps = omit(props, ['form', 'component', 'meta', 'styles'])
    return (
      <Input
        secureTextEntry={secure}
        rightIcon={{...get(icons, String(secure)), onPress: this.changeSecure}}
        {...mainProps}
        {...extra}
        onChangeText={onChange}
        value={mainValue}
      />
    )
  }
}

export default withInput(Text)
