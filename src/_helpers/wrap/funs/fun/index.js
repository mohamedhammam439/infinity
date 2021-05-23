import React from 'react'
import applyFilters from '_helpers/functions/filters';
export default (fun)=>{
  return function Function(MainComponent) {
    const MainFunComponent = (props) => {
      const data = applyFilters(fun, undefined, {props})
      return <MainComponent {...{...props, ...data}} />
    };
    return MainFunComponent
  }
}
