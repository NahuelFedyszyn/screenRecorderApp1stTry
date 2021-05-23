/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Node} from 'react';
import RecordScreen from 'react-native-record-screen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';


const App = () => {

  function handleRecord(){
    RecordScreen.startRecording().catch((error) => console.error(error));
  }

  async function handleStop(){
    const res = await RecordScreen.stopRecording().catch((error) => alert(error));
    alert("Grabacion guardada en " +res.result.outputURL)
    if (res){
      const url = res.result.outputURL;
    }
    //alert(res)
    RecordScreen.clean();
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="GRABAR" onPress={handleRecord} />
          <Button title="STOP" onPress={handleStop} />
          <TextInput placeholder="Escribir"></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
