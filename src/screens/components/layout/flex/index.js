import React, {Component} from 'react'
import {View} from 'react-native';
import {omit} from 'lodash';
import omits from '_helpers/data/mainProps.js';
import applyFilters from '_helpers/functions/filters';

export default class Flex extends Component {
  renderComps(comps) {
    const {MasterComponent} = this.props
    const mainProps = omit(this.props, omits)
    return <MasterComponent {...{...mainProps, comps}} />
  }
  render() {
    const {styles, style_fun, comps, ...props} = this.props
    const style = (style_fun && applyFilters(style_fun, undefined, {props: this.props})) || styles?.container
    return (
      <View style={style}>
        {this.renderComps(props.props?.comps || comps)}
      </View>
    )
  }
}
