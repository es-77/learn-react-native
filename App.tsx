import React from 'react';
import {View, Text} from 'react-native';
import PageViewTextButton from './components/PageViewTextButton';
import PageButtonOnpress from './components/PageButtonOnpress';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Emmanuel saleem</Text>
      <Text style={{fontSize: 50}}>second text</Text>
      <PageViewTextButton/>

      <PageButtonOnpress/>
    </View>
  );
};

export default App;
