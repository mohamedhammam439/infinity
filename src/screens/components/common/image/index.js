/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Image} from 'react-native';
import mainStyles from './style';
// import {BASE_URL, DEFAULT_IMAGE} from '_config/index';
import applyFilters from '_helpers/functions/filters';
import {pick} from 'lodash'
export default class ImageItem extends Component {
  render() {
    const {image, ...mainProps} = this.props
    const path = image?.key ? applyFilters(image, undefined, {props: mainProps}):applyFilters({path: `images.data.${this.props.image}.path`})
    // const {source = path?.source || {uri: [BASE_URL, path || DEFAULT_IMAGE].join('/')}, styles: r_styles, ...props} = this.props
    const {source = path?.source } = this.props
    const styles = {...mainStyles, ...r_styles}
    const iProps = pick(this.props, ['resizeMode', 'style'])
    return (
      <Image
        style={styles.container}
        source={source}
        {...iProps}
      />
    );
  }
}
