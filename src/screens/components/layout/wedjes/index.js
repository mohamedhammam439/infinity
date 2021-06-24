import React, { Component } from "react";
import { View } from "react-native";
import { omit , get } from "lodash";
import omits from "_helpers/data/mainProps.js";
import applyFilters from "_helpers/functions/filters";
import data from "store/init/wedjes/card1"

export default class Wedjes extends Component {
  constructor(props) {
    super(props)
    this.comp = applyFilters({ key: "wedjes", data: get(data, props.type, data.card1) }, props.data)
    console.log('from wedjes',this.comp)
  }
  renderComps(comps) {
    const { MasterComponent } = this.props;
    const mainProps = omit(this.props, omits);
    return <MasterComponent {...{ ...mainProps, ...this.comp }} />;
  }
  render() {
    const { styles, style_fun, comps, ...props } = this.props;
    const style =
      (style_fun &&
        applyFilters(style_fun, undefined, { props: this.props })) ||
      styles?.container;
    return (
      <View style={style}>{this.renderComps(props.props?.comps || comps)}</View>
    );
  }
}
