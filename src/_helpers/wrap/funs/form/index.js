import {Formik} from 'formik'
import React, {Component} from 'react'
import applyFilters from '_helpers/functions/filters';
import {get, isEqual, pick} from 'lodash'
class Form extends Component {
  shouldComponentUpdate(nextProps) {
    const deps = nextProps?.deps;
    return !isEqual(get(nextProps, deps), get(this.props, deps));
  }
  render() {
    const {MainComp} = this.props;
    const mainProps = pick(this.props, ['submitForm', 'handleChange', 'resetForm', 'isValid', 'validateForm'])
    return <MainComp {...mainProps} />
  }
}
export default class formComponent extends Component {
  handleSubmit = (values, props)=>{
    return applyFilters(this.props.onSubmit, values, {props: {...this.props, ...props, values}});
  }
  render() {
    const initValues = applyFilters(this.props.init, undefined, {props: this.props})
    return (
      <Formik onSubmit={this.handleSubmit} initialValues={initValues||{}} {...this.props.extra}>
        {(props)=>{
          return <Form {...{...this.props, ...props}} />
        }}
      </Formik>
    )
  }
}
