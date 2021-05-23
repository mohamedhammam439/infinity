import React from 'react'
import {useNavigation} from '@react-navigation/native';

export {default as withRoute} from './route';
export default function MainNavigation(MainComponent) {
  const NavComp = (props) => {
    const navigation = useNavigation();
    return <MainComponent {...{...props, ...navigation}} />
  };
  return NavComp
}
