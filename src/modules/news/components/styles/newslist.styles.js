import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  viewNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textNews: {
    marginTop: 25,
    fontSize: 18,
    color: 'blue',
    alignItems: 'flex-start',
  },
  imgCircle: {
    borderRadius: 100,
    margin: 10,
    width: 50,
    height: 50
  },
  imgArrow: {
    // borderRadius: 100,
    marginTop: 25,
    marginRight: 15,
    width: 25,
    height: 25
  }
});
