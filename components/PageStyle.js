import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import MyStyle from "./style/MyStyle";
const PageStyle = () => {

  return (
    <View>
      <Text style={{ color:"red",fontSize:30}}>inline style</Text>
      <Text style={style.textBox}>internal style</Text>
      <Text style={MyStyle.textBox}>external style</Text>
    </View>
  );
};

export default PageStyle;

const style = StyleSheet.create({
    textBox:{
        color:"blue",
        fontSize:30,
    }

});
