import {connect} from 'react-redux';
import applyFilters from '_helpers/functions/filters';
import {get, mapValues} from 'lodash'
export default (data)=>{
  const mapStateToProps = (state, props)=>(mapValues(data, (d, key)=>(d.key ? applyFilters(d, {}, {props: props}):get(state, d, ''))))
  return function MasterComponent(MComponent) {
    return connect(mapStateToProps)(MComponent)
  }
}
