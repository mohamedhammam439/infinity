import {omit} from 'lodash'
import React, {Component} from 'react'
import omits from '_helpers/data/mainProps.js'
export default (data)=>{
  return function withInput(MainComponent) {
    return class InputComp extends Component {
      onChange = (value)=>{
        const {field, mainChange=field.onChange} = this.props
        mainChange({target: {name: field.name, value}})
      }
      render() {
        const {styles} = this.props
        const mainProps = omit(this.props, omits);
        return (
          <MainComponent {...mainProps} styles={styles} onChange={this.onChange} />
        );
      }
    }
  }
}
