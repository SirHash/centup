import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  bgImg:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  logoImg:{
    width: 170,
    height: 100,
  },
  text:{
    padding:38,
    textAlign:'center',
    fontSize:17
  }
})
