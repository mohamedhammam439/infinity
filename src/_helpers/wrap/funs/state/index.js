import React, {Component} from 'react'
import applyFilters from '_helpers/functions/filters';

export default class StateComponent extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.state = applyFilters(this.props.init, undefined, {props: this.props})
  }
  changeState = (params)=>{
    this.setState(params)
  }
  render() {
    const {MainComp} = this.props;
    return <MainComp {...{...this.props, ...this.state, changeState: this.changeState}} />
  }
}
