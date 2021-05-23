import {lazy} from 'react'

export const Form = lazy(()=>import('./form'));
export {default as connect} from './connect'
export {default as nav} from './nav'
export {default as route} from './route'
export {default as fun} from './fun'
export {default as condition} from './condition'
export {default as form_vals} from './form_vals'
export {default as form_field} from './form_functions'
export {default as Input} from './input'
export const Selector = lazy(()=>import('./selector'))
export const Master = lazy(()=>import('./master'))
export const State = lazy(()=>import('./state'))
