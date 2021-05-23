import React from 'react'
import {Fragment} from 'react';
import applyFilters from '_helpers/functions/filters';
export default (fun)=>{
  return function Function(MainComponent) {
    const MainFunComponent = (props) => {
      const check = applyFilters(fun, undefined, {props})
      if (check) {
        return <MainComponent {...{...props}} />
      }
      return <Fragment></Fragment>
    };
    return MainFunComponent
  }
}
