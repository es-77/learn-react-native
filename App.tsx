import React from 'react';
import {View, Text} from 'react-native';
import PageViewTextButton from './components/PageViewTextButton';
import PageButtonOnpress from './components/PageButtonOnpress';
import PageStyle from './components/PageStyle';
import PageInputText from './components/PageInputText';
import InputForm from './components/InputForm';
import PageFlateList from './components/PageFlateList';
import PageMap from './components/PageMap';
import PageGrid from './components/PageGrid';

const App = () => {
  return (
    <View>
      {/* <Text style={{fontSize: 50}}>Emmanuel saleem</Text>
      <Text style={{fontSize: 50}}>second text</Text>
      <PageViewTextButton/>

      <PageButtonOnpress/> */}
      {/* <Text style={{fontSize: 50}}>style</Text>
      <PageStyle/> */}
      {/* <Text style={{fontSize: 50}}>input text</Text>
      <PageInputText/> */}
      {/* <Text style={{fontSize: 50}}>form input</Text>
      <InputForm/> */}
      {/* <Text style={{fontSize: 50}}>flate list</Text>
      <PageFlateList/> */}
      {/* <Text style={{fontSize: 50}}>map list</Text>
      <PageMap/> */}
      <Text style={{fontSize: 50}}>Grid Layout</Text>
      <PageGrid/>
    </View>
  );
};

export default App;
 