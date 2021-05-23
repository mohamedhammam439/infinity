import React from 'react'
import {useRoute} from '@react-navigation/native';

export default function MainNavigation(MainComponent) {
  const NavComp = (props) =>{
    const routes = useRoute();
    return <MainComponent {...{...props, route: routes}} />
  };
  return NavComp
}
