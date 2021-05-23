import React, {Component} from 'react';
import applyFilters from '_helpers/functions/filters';
import NoData from '_helpers/no_data'
import {map, pick} from 'lodash';

class List extends Component {
  render() {
    const {fun, empty=true, MasterComponent, card, picks, ...mainProps} = this.props;
    // const {fun} = (mainApp.list || {})
    const list = applyFilters(fun, undefined, {props: this.props})
    const maxIndex = list.length-1
    // console.log(list)
    if (!list?.length && empty) {
      return <NoData></NoData>
    }
    return map(list, (d, index)=>(
      <MasterComponent key={index} {...{item: d, maxIndex, ...card, ...pick(mainProps, picks)}} />)
    )
  }
}
export default List;
