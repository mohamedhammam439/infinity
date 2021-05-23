import * as MainIcons from 'react-native-vector-icons';
import React, {Component} from 'react'
import {get, pick} from 'lodash'
// import SvgUri from 'react-native-svg-uri';
// import FB from 'assets/icons/fb.svg'
import appStyles from 'app-global-styles.json'
import {createIconSetFromIcoMoon} from '@expo/vector-icons';
import icoMoonConfig from './moon.json';
// import omits from '_helpers/data/mainProps';
import applyFilters from '_helpers/functions/filters'

const Moon = createIconSetFromIcoMoon(icoMoonConfig, 'ico-moon', 'icomoon.ttf');
const Icons = {...MainIcons, Moon}
export default class index extends Component {
  onPress = ()=>{
    const {action} = this.props;
    applyFilters(action, undefined, {props: this.props})
  }
  render() {
    let {type_fun, type, onPress, action, name, ...props} = this.props
    if (type_fun) {
      const ico = applyFilters(type_fun, undefined, {props: this.props})
      type = ico.type;
      name = ico.name;
    }
    if (!type) {
      return <></>
    }
    const MainIcon = get(Icons, props?.props?.type || type, <></>)
    const mainProps = pick(props.props || props, ['color', 'size', 'name', 'iconStyle', 'borderRadius'])
    if (action || onPress) {
      mainProps.onPress = onPress || this.onPress;
    }
    return (
      <MainIcon {...{name, color: appStyles.colors.icons, ...mainProps}}/>
    )
  }
}
