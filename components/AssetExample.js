import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AssetExample extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> {this.props.answer} </Text>
        </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection:'row'
  },
  button: {
    //marginRight:40,
    //marginBottom:5,
    //marginTop:5,

    paddingHorizontal: 150,
    paddingVertical: 70,

    //paddingHorizontal:70,
    // paddingVertical:50,
   // backgroundColor: '#D2E0DB',
    borderRadius: 10,
    //borderWidth: 1,
    borderColor: 'black',
  
    backgroundColor: '#c9d6ea'
  },
  text: {
    color: 'black',
    fontSize: 20,
    //fontWeight:'bold',
    alignSelf:'stretch',
    //textAlignVertical:'center',
    //textAlign: 'center',
    // transform: [{ rotate: '270deg'}]
  },
});
