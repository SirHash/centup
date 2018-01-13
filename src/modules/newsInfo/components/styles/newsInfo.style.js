import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  txtTitulo:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems:'center',
    paddingTop: 70
    // justifyContent:'center'
  },
  txtSubtitulo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInit:{
    paddingBottom:20,
    fontSize: 18,
    fontWeight: "900",
  },
  logoImg:{
    width: 220,
    height: 70,
    marginBottom: 20
  },
  logoMiniImg: {
    width: 40,
    height: 30,
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
    borderWidth: 0,
    margin: 5,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  btnLogin: {
    backgroundColor: '#40b8e1',
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
  textWhite:{
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  textBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
})
