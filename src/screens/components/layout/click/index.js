import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native';
import {omit} from 'lodash';
import omits from '_helpers/data/mainProps.js';
import applyFilters from '_helpers/functions/filters';

export default class Clicks extends Component {
  renderComps(comps) {
    const {MasterComponent} = this.props
    const mainProps = omit(this.props, omits)
    return <MasterComponent comps={comps} {...mainProps}/>
  }
  handleClick = ()=>{
    const {click, ...props} = this.props
    return applyFilters(click, undefined, {props})
  }
  render() {
    const {styles, style_fun, comps} = this.props
    const style = (style_fun && applyFilters(style_fun, undefined, {props: this.props})) || styles?.container
    return (
      <TouchableOpacity onPress={this.handleClick} style={style?.container || style}>
        {this.renderComps(comps)}
      </TouchableOpacity>
    )
  }
}
