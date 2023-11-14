import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text, FlatList} from 'react-native';
const PageFlateList = () => {
  const users = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'emmanuel',
    },
    {
      id: 3,
      name: 'John 3',
    },
    {
      id: 4,
      name: 'John 4',
    },
  ];

  return (
    <>
      <View>
        <Text> flate list start</Text>
        <FlatList
        data={users}
          renderItem={({item}) => <Text style={{ fontSize:20 }} > {item.name}</Text>}
        />
      </View>
    </>
  );
};

export default PageFlateList;

const style = StyleSheet.create({
  textinput: {
    fontSize: 20,
    color: 'blue',
    borderBlockColor: 'blue',
    borderWidth: 2,
    margin: 2,
  },
  buttonMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
});
