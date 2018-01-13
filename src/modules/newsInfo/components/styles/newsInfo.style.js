import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  txtTitulo:{          
    paddingTop: 5,
    fontWeight: 'bold',
    color: '#abdafc',
    fontSize: 30,
    textAlign: 'center'
    // justifyContent:'center'
  },
  txtSubtitulo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgNews:{
    width: 340,
    height: 180,
    marginBottom: 5
  },
  logoImg:{
    width: 200,  
    height: 70    
  },
  logoMiniImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 100
  },
  divTopo: {
    //Alinha o conteudo dentro da View Verticalmente, ou espaço entre os componentes
    justifyContent: 'space-around',    
    //Alinha o conteudo dentro da View Horizontalmente
    alignItems: 'center',
  },
  divSubtitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:10
  },
  viewLogo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:10
  },
  divImg: {
    //Alinha o conteudo dentro da View Verticalmente, ou espaço entre os componentes
    justifyContent: 'space-around',    
    //Alinha o conteudo dentro da View Horizontalmente
    alignItems: 'center'
  },
  iconsTopo:{
     width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 100
  },
  bgImg:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  divGlobal:{
    flexDirection: 'column'
  },
  subtitle: {
    marginLeft: 10,
    marginTop: 5
  },
  txtUnderImg:{
    fontSize: 10,
    textAlign: 'center'
  },
  viewUnderImg:{
     marginRight: 10,
     marginLeft: 10
  },
  viewBottom: {
    alignItems:'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop:10    
  },
  txtDescription:{    
  }
})
