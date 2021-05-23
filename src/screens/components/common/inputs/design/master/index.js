import {omit} from 'lodash';
import React, {Component} from 'react'
import {View} from 'react-native'
import withInput from '_helpers/wrap/funs/input'
import omits from '_helpers/data/mainProps';

class index extends Component {
  render() {
    const {styles, wraps, MasterComponent, comps} = this.props
    const mainProps = omit(this.props, omits)
    return (
      <View style={styles?.container}>
        <MasterComponent {...{...mainProps, wraps, comps}} ></MasterComponent>
      </View>
    )
  }
}
export default withInput(index)
