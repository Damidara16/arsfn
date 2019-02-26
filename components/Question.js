import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage  } from 'react-native';

export default class Question extends React.Component {

  constructor(){
    super()
 /*   let saveData = () => {
      let qs = {
      a:'ENTER PURCHASE TAG LOOKUP CODE',
      b:'WHAT IS YOUR ITEM\'S PRICE RANGE',
      c:'WAS YOUR ITEM ON SALE',
      d:'WHEN DID YOU PURCHASE YOUR ITEM',
      e:'WHAT METHOD OF PAYMENT DID YOU USE WHEN PURCHASING THIS ITEM',
      f:'AT WHICH LOCATION DID YOU PURCHASE YOUR ITEM',
      g:'WHAT\'S YOUR REASONING FOR RETURNING THIS ITEM',
      h:'HAS THE ITEM YOUR RETURNING ACTUALLY BEEN PURCHASED AND HAS NOT BEEN STOLEN. PLEASE KNOW THAT IF YOUR ANSWER TO ANY OF THESE IS NO, YOU ARE COMMITTING RETURN FRAUD AND IS PUNISH BY THE LAW, DON\'T RUIN YOUR FUTURE'
      }
      AsyncStorage.setItem('questions', JSON.stringify(qs))
    }
  */
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>{this.props.q}</Text>
      </View>
    );
  }
}


    
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 24,
    flexDirection:'row'
  },

  text:{
   color:'white',
   fontSize:30,
    transform: [{ rotate: '270deg'}]
  }
});
