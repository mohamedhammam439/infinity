import {StyleSheet} from 'react-native';
import appStyles from 'app-global-styles.json';


export const buildStyles = (key, styles)=>(StyleSheet.create({
    [key]: styles,
  }))


  export const fullButtonStyle = (container, button)=>(StyleSheet.create({
    container: {
      // width: '100%',
      backgroundColor: appStyles.colors.secondary,
      display: 'flex',
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 60,
      // : 1,
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


  // export const shadowStyle = (styles)=>(StyleSheet.create({
  //   container: {
  //     // flex: 1,
  //     backgroundColor: appStyles.white,
  //     flexDirection: 'column',
  //     // marginHorizontal: '5%',
  //     marginVertical: 0.5 * appStyles.spacing,
  //     zIndex: 1,
  //     width: '40%',
  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     borderWidth: 1,
  //     borderColor: appStyles.colors.white,
  //     borderRadius: appStyles.itemBorderRadius,
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 2,
  //     // paddingHorizontal: 0,
  //     ...styles,
  //   },
  // }))