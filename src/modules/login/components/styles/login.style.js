import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  bgImg:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems:'center',
    paddingTop: 70
    // justifyContent:'center'
  },
  containerTop: {
    flex: 3
  },
  textInit:{
    paddingBottom:20,
    fontSize: 18,
    fontWeight: "900"

  },
  logoImg:{
    width: 300,
    height: 150,
  },
  containerFields: {
    flex: 2
  },
  textFields: {
    fontSize: 18,
    paddingLeft: 15,
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5
  },
  btnLogin: {
    backgroundColor: 'blue',
    marginTop: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  containerBtns: {
    flex: 4,
  },
  containerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBold: {
    fontWeight: 'bold'
  }
})
