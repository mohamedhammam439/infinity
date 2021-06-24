import React, {Component} from 'react'
import applyFilters from '_helpers/functions/filters';
import {Text} from 'react-native'
import {mapValues} from 'lodash'
export default class text extends Component {
  render() {
    const {style_fun, extras, styles={},className, fun, value=applyFilters(fun, undefined, {props: this.props})} = this.props
    const extraProps = mapValues(extras, (d)=>(d.key ? applyFilters(d, undefined, {prop: this.props}):d));
    const style = (style_fun && applyFilters(style_fun, undefined, {props: this.props})) || styles?.text
    // console.log(value)
    return (
      <Text style={style} {...extraProps}>
        {value}
      </Text>
    )
  }
}
