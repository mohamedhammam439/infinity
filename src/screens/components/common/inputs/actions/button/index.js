import {Button} from 'react-native-elements';
import React, {Component} from 'react'
import applyFilters from '_helpers/functions/filters'
export default class button extends Component {
  render() {
    const {button} = this.props
    return (
      <Button
        title={button.label}
        onPress={()=>applyFilters(button.action, undefined, {props: this.props})}>
      </Button>
    )
  }
}
