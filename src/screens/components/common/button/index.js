import React, {Component} from 'react'
import {TouchableHighlight, View, Text} from 'react-native'
import mainStyles from './style';
import applyFilters from '_helpers/functions/filters';
import withNavigation, {withRoute} from '_helpers/wrap/nav'
// import Icon from 'components/icon'
import appStyles from 'app-global-styles.json';

class Buttons extends Component {
  onClick = ()=>{
    const {button} = this.props
    return applyFilters(button.action, undefined, {props: this.props}, this.props)
  }
  render() {
    const {button={}, active, onPress=this.onClick} = this.props
    const styles = {...mainStyles, ...button.styles}
    const mainActive = active?.key ? applyFilters(active, undefined, {props: this.props}):active
    const activeColor = mainActive ? appStyles.colors.primary:appStyles.colors.secondary
    // console.log(styles.container)
    return (
      <TouchableHighlight activeOpacity={0.3} underlayColor="rgba(0, 0, 0, 0.3)" style={styles.main} onPress={onPress}>
        <View style={styles.container}>
          {button.icons?.left && <Icon color={activeColor} {...button.icons?.left}/>}
          {button.text && <Text style={styles?.button}>{button.text}</Text>}
          {button.icons?.right && <Icon color={activeColor} {...button.icons?.right}/>}
        </View>
      </TouchableHighlight>
    )
  }
}
// make error
// export default withRoute(withNavigation(Buttons))
export default Buttons;
