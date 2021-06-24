import {StyleSheet} from 'react-native';
import appStyles from 'app-global-styles.json';


export const buildStyles = (key, styles)=>(StyleSheet.create({
    [key]: styles,
  }))

  export const fullButtonStyle = (container, button)=>(StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#024a60',
      color:'#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 10,
      marginTop: 50
    },
    button: {
      color: appStyles.colors.white,
      ...appStyles.typo.large_r,
    },
  }))

  export const skipButtonStyle = (container, button)=>(StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 10,
      marginVertical: 10,
      borderWidth: 2,
      borderColor: '#024a60'
    },
    button: {
      color:'#024a60',
      ...appStyles.typo.large_b,
    },
  }))

  export const buttonStyle = (container, button)=>(StyleSheet.create({
    container: {
      width: 80,
      backgroundColor: '#006f74',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 10
    },
    button: {
      color: appStyles.colors.white,
      ...appStyles.typo.large_r,
    },
  }))

  export const inputStyles = (container, input, label)=>(StyleSheet.create({
    container: {
      marginVertical: '4%',
      ...container,
    },
    input: {
      minHeight: 30,
      ...input,
    },
    label: {
      paddingVertical: 4,
      ...appStyles.typo.meduim,
    },
  }))
  export const labelStyles = (styles)=>(StyleSheet.create({
    labelStyle: {
      paddingVertical: 4,
      ...appStyles.typo.meduim,
    },
  }))


  export const shadowStyle = (styles)=>(StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: appStyles.white,
      flexDirection: 'column',
      // marginHorizontal: '5%',
      marginVertical: 0.5 * appStyles.spacing,
      zIndex: 1,
      width: '40%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      borderWidth: 1,
      borderColor: appStyles.colors.white,
      borderRadius: appStyles.itemBorderRadius,
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
      // paddingHorizontal: 0,
      ...styles,
    },
  }))