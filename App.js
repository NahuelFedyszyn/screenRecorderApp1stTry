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
    const res = await RecordScreen.stopRecording().catch((error) => console.warn(error));
    if (res){
      const url = res.result.outputURL;
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Button title="RECORD" onPress={handleRecord} />
          <Button title="STOP" onPress={handleStop} />
          <TextInput placeholder="Useless text"></TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
