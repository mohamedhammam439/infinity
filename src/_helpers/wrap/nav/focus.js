import React, {Fragment} from 'react'
// import {useNavigation} from '@react-navigation/native';
export default function MainNavigation(MainComponent) {
  // return MainComponent
  const NavComp = (props) => {
    const {navigation} = props;
    if (!navigation.isFocused()) {
      return <Fragment></Fragment>
    }
    return <MainComponent {...{...props}} />
  };
  return NavComp
}
