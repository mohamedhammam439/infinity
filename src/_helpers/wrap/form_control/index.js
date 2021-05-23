import React, {Component} from 'react'
import {get, isEqual, pick, isObject} from 'lodash';
import {Field} from 'formik';
import applyFilter from '_helpers/functions/filters';
import CreateValidations from '_helpers/functions/validation/index.js'
import {useFormikContext} from 'formik'
import {default_val} from '_helpers/statics/funs/index.js'
const default_true = default_val(true)
class FormField extends Component {
  constructor(props) {
    super(props);
    if (!props.field.value && (props.initValue || props.initZero) ) {
      this.key = isObject(props.initValue) ? props.initValue:default_val(props.initValue)
      this.updateInitValue(props)
    }
  }
  updateInitValue(props) {
    const {field} = this.props;
    const value = applyFilter(this.key)
    field.onChange({
      target: {
        name: field.name,
        value: value,
      },
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {field, dep, f_index, deps = [], full_form_deps=[], extra_deps=[]} = this.props
    const name = field.name;
    const fieldDep = deps.map((d) => ['form.values', f_index, dep].filter(Boolean).join('.'));
    const value = get(nextProps, 'field.value')
    if (value==null && nextProps.initValue) {
      this.updateInitValue(nextProps)
    }
    const fullFormDep = full_form_deps.map((d) => `fullForm.${d}`)
    const compare = [...extra_deps, 'tabKey', 'appSetting', 'mainValues', 'mainValue', 'mainForm', 'allValues', 'reduxName', `form.touched.${name}`, `form.errors.${name}`, 'field', 'form.submitCount', 'form.initialValues', ...fieldDep, ...fullFormDep].filter((d) => d)
    return Boolean(field.name != undefined) && !isEqual({state: this.state, props: pick(this.props, compare)}, {state: nextState, props: pick(nextProps, compare)});
  }
  render() {
    const {form, pers=default_true, field, f_index, component: MainComponent} = this.props;
    const valid = Boolean(applyFilter(pers, undefined, {values: form.values, rawValue: get(form.values, f_index, {}), field}))
    if (!valid) {
      return <></>
    }
    return <MainComponent {...this.props} />
  }
}
class FormControlsRender extends Component {
  constructor(props) {
    super(props)
    this.validations = CreateValidations(props.validates, props)
    this.f_index = (props.name|| '').split('.').slice(0, -1).join('.');
  }
  validation = (value) => {
    const {validates, form} = this.props
    if (!validates) {
      return undefined
    }
    const rowValues = get(form?.values, this.f_index, {})
    value = (value == null) ? '' : value
    const valid = this.validations.reduce((res, fun) => (res || fun(value, rowValues, form.values)), undefined)
    return valid;
  }
  render() {
    const {name} = this.props;
    const {f_index} = this

    return <Field validate={this.validation} name={name}>
      {(field) => (
        <FormField {...{...this.props, ...field, f_index}} />
      )}
    </Field>
  }
}
export default function formHooking(props) {
  // Grab values and submitForm from context
  const {values} = useFormikContext();

  return <FormControlsRender {...props} form={{values}}/>;
}
