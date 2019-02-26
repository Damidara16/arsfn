import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Alert,
} from 'react-native';
import { Constants } from 'expo';

import AssetExample from './components/AssetExample';
import Question from './components/Question';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.c1}>
          <Text style={styles.text}>AT WHICH LOCATION DID YOU PURCHASE YOUR ITEM</Text>
        </View>
        <View style={styles.c2}>
          <AssetExample answer='store 1'/>
          <AssetExample answer='store 2'/>
          <AssetExample answer='store 3'/>
        </View>
      </View>
    );
  }
}

/*  let displayData = async () => {
      try {
        let q = await AsyncStorage.getItem('qs');
        let parsed = JSON.parse(q);
        Alert.alert(parsed.a);
      }
      catch(error) {
        alert(error)
      }
    }
  }*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    // flexDirection:'row',
    //alignItems: 'center',
  },
  c1: {
    flex: 2,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    //    flexDirection:'row'
    //alignItems:'stretch',
    //width:'100%'
  },
  c2: {
    flex: 7,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    alignItems:'center',
    paddingTop:5
    //    flexDirection:'row'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight:'bold',
    //alignSelf:'stretch',
    //textAlignVertical:'center',
    textAlign: 'center',
    // transform: [{ rotate: '270deg'}]
  },
});
