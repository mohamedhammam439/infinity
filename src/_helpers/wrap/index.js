import React, {Component} from 'react';
import {get, reduce} from 'lodash';
import * as main from './funs';
import applyFilters from '_helpers/functions/filters';

export default class wrapper extends Component {
  getWraper(WComponent, data, k) {
    const MainComponent = get(main, data.type || k, '');
    if (!MainComponent) {
      throw new Error(`error wrapper ${data.type || k} is not found please check the name of the wrapper`);
    }
    if (applyFilters({key: 'checkComponent'}, MainComponent)) {
      return (mainProps) => (
        <MainComponent
          {...data}
          {...applyFilters(data.props, mainProps)}
          MainComp={(props) => <WComponent {...{...mainProps, ...props}} />}
        ></MainComponent>
      );
    }
    return MainComponent(data)(WComponent);
  }

  mappingWrappers() {
    const {component = this.props.children, wraps} = this.props;
    const MainComponent = reduce(
        wraps,
        (o, v, k) => {
          return this.getWraper(o, v, k);
        },
        component,
    );
    return MainComponent;
  }
  render() {
    const MainComponent = this.mappingWrappers();
    return <MainComponent {...this.props} />;
  }
}
