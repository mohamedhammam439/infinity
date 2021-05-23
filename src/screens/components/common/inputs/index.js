import React, {Component, Fragment, Suspense} from 'react'
import LinkedComponent from '_helpers/wrap/linked'
import FieldComponent from '_helpers/wrap/form_control'
import * as InputsComponent from './types'
import {get} from 'lodash'
import ErrorMessage from './error_msg'
import {View} from 'react-native'
class FieldClassComponent extends Component {
  constructor(props) {
    super(props);
    this.MainComponent = get(InputsComponent, props.type, InputsComponent.text)
    // console.log(props.type, this.MainComponent, InputsComponent)
  }
  render() {
    const {MainComponent} = this
    const {form, field, styles={}} = this.props
    const touched = get(form, `touched.${field.name}`, form.submitCount > 0)
    const error=get(form, `errors.${field.name}`)
    return <View style={styles?.container}>
      {/* <section dir='rtl'> */}
      <MainComponent {...this.props}/>
      <ErrorMessage styles={styles} touched={touched} error={error}></ErrorMessage>
      {/* </section> */}
    </View>
  }
}
const MainComponent = FieldClassComponent
export default class MainField extends Component {
  render() {
    // const {MainComponent} = this
    // console.log(FieldComponent, LinkedComponent, MainComponent)
    return (
      <Suspense fallback={<Fragment></Fragment>}>
        <LinkedComponent {...this.props}>
          <FieldComponent {...this.props} component={MainComponent}>
          </FieldComponent>
        </LinkedComponent>
      </Suspense>
    )
  }
}
