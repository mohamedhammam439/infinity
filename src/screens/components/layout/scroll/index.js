import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import {omit} from 'lodash';
import omits from '_helpers/data/mainProps.js';
import applyFilters from '_helpers/functions/filters';
// import { SafeAreaView } from 'react-native';

export default class Flex extends Component {
  renderComps(comps) {
    const {MasterComponent} = this.props
    const mainProps = omit(this.props, omits)
    return <MasterComponent {...{...mainProps, comps}} />
  }
  render() {
    const {styles, style_fun, comps, ...props} = this.props
    const style = styles?.container || (style_fun && applyFilters(style_fun, undefined, {props: this.props}))
    const content = styles?.content || (style_fun && applyFilters(style_fun, undefined, {props: this.props}))
    return (
      <ScrollView style={style} keyboardShouldPersistTaps='handled' contentContainerStyle={content}>
        {this.renderComps(props.props?.comps || comps)}
      </ScrollView>
    )
  }
}
