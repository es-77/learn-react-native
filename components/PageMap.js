import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text, FlatList, ScrollView} from 'react-native';
const PageMap = () => {
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
    {
      id: 5,
      name: 'John 5',
    },
    {
      id: 6,
      name: 'John 6',
    },
    {
      id: 7,
      name: 'John 7',
    },
    {
      id: 8,
      name: 'John 8',
    },
    {
      id: 8,
      name: 'John 8',
    },
    {
      id: 9,
      name: 'John 9',
    },
    {
      id: 10,
      name: 'John 10',
    },
    {
      id: 11,
      name: 'John 11',
    },
    {
      id: 12,
      name: 'John 12',
    },
    {
      id: 13,
      name: 'John 13',
    },
    {
      id: 14,
      name: 'John 14',
    },
  ];

  return (
    <>
      <View style={{ maxHeight:"100%" }}>
        <Text> flate list start</Text>
        <ScrollView style={{ marginBottom:100 }}>
            {users.map((item)=>{
                return( <Text style={{ fontSize:20,margin:10,borderColor:"blue",borderWidth:2,padding:7 }}> {item?.name}</Text>)
            })}
        </ScrollView>
      </View>
    </>
  );
};

export default PageMap;

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
