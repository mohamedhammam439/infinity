import React, {Component, Suspense, Fragment} from 'react';
import Wrapper from '../_helpers/wrap';
import * as components from '../screens/components';
import {get, map, omit} from 'lodash';
// import './styles/theme.module.scss'
import csss from './styles/red.scss'


export default class MasterComponent extends Component {
  state={}
  constructor(props){
    super(props);
    if(props.css){
      this.state.className = require(`./styles/${props.css}.module.scss`)
      // import(`./styles/${props.css}.module.scss`).then(d=>console.log(d) )
      console.log('from main', csss , csss.text)
    }
  }
  renderComponents = (d, type) => {
    const {wraps, comp} = d;
    // console.log(comp)
    const MainComp = get(components, comp?.type || type);
    if (MainComp) {
      return this.wrapComp(wraps, MainComp, d, type);
    }
    return <Fragment key={type}></Fragment>;
  };

  wrapComp = (wraps, MainComp, data, key) => {
    const mainProps = omit(this.props, ['comp', 'comps', 'children']);
    return (
      <Wrapper wraps={wraps} key={key} MasterComponent={MasterComponent} {...mainProps}>
        {(props) => {
          return (
            <Suspense fallback={<Fragment></Fragment>}>
              <MainComp {...{...(mainProps.props || mainProps), ...data, ...props, MasterComponent, className:this.state.className}} />
            </Suspense>
          );
        }}
      </Wrapper>
    );
  };

  render() {
    const MainComponent = get(components, this.props.comp?.type || this.props.comp);
    const {wraps, comps} = this.props;
    // console.log(this.props.comp?.type)
    if (MainComponent) {
      return this.wrapComp(wraps, MainComponent, this.props);
    }
    if (comps) {
      return map(comps, this.renderComponents);
    }
    return <Fragment></Fragment>;
  }
}
