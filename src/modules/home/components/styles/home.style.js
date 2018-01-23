import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  containerScreen:{
    flexDirection: 'column',
    flex:1,
    backgroundColor: '#fcf6e6'
  },
  containerTopo:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgLogo:{
    width: 145,
    height: 50,
  },
  containerSlider:{
    flex:10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentSlider:{
    flex:9
  },
  spaceSlider:{
    flexDirection: 'row',
    width: Dimensions.get('window').width * 3
  },
  containerNavigatorSlider:{
    flexDirection: 'row',
    flex: 1,
  },
  navigator:{
    backgroundColor: 'gray',
    borderRadius: 7,
    width: 7, 
    height: 7,
    margin: 1
  },
  containerBtnSignUp:{
    flex: 4,
  },
  btnSignUp:{
    backgroundColor: '#e4aa49',
    width: 324,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5
  },
  txtBtnSignUp:{
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  containerSecondaryBtns:{
    flexDirection: 'row',
  },
  btnLogin:{
    backgroundColor: '#f4ddbb',
    width: 155,
    margin: 7,
    marginLeft: 0,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnSignUpLater:{
    backgroundColor: '#f4ddbb',
    width: 155,
    margin: 7,
    marginRight: 0,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  txtBtnLogin:{
    color:'#ca8926',
    fontWeight: '300',
    textAlign: 'center',
  },
  txtBtnSignUpLater:{
    color:'#ca8926',
    fontWeight: '300',
    textAlign: 'center',
  }
})
