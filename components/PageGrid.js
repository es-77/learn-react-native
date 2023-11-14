import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text, FlatList, ScrollView} from 'react-native';
const PageGrid = () => {
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
    <View style={{ height:"100",marginBottom:150 }}>
    <ScrollView>
      <View style={{ flex:1,flexDirection:"row",flexWrap:"wrap" }}>
        <Text style={style?.gridItem} > start </Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > Grid</Text>
        <Text style={style?.gridItem} > last end</Text>
      </View>
    </ScrollView>
    </View>
    </>
  );
};

export default PageGrid;

const style = StyleSheet.create({
  gridItem: {
    backgroundColor:"blue",
    margin:5,
    padding:10,
    width:120,
    height:120,
    textAlign:"center",
    textAlignVertical:"center",
    color:"white"

  }
});
