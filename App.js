import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  Button,
  NativeModules,
} from 'react-native';

const App = () => {
  const [path, setPath] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Text>
          Type in the full path of the .exe to launch. If it relies on .dll
          files in its folder, this will cause a C# exception.
        </Text>
        <TextInput onChangeText={setPath} />
        <Button
          title="Launch .exe"
          onPress={() => {
            NativeModules.LaunchApp.launchApp(path);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
