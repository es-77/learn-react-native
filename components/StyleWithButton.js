import React from 'react'
import {View, Text, Button,TouchableHighlight,StyleSheet} from 'react-native'
const StyleWithButton = () => {

  return (
    <View style={style.main}>
        <TouchableHighlight>
            <Text style={[style.button,style.success]} >button success </Text>
        </TouchableHighlight>

        <TouchableHighlight>
        <Text style={[style.button,style.error]} >button error </Text>
        </TouchableHighlight>

        <TouchableHighlight>
        <Text style={[style.button,style.info]} >button info </Text>
        </TouchableHighlight>

        <TouchableHighlight>
        <Text style={[style.button,style.warining]} >button warining </Text>
        </TouchableHighlight>
    </View>
  );
};

export default StyleWithButton;

const style = StyleSheet.create({
    main: {
        // flex:1
  
    },
    button:{
        backgroundColor:"#bbb",
        color:"#fff",
        fontSize:24,
        textAlign:"center",
        padding:10,
        margin:10,
        borderRadius:10
    },
    success:{backgroundColor:'green'},
    error:{backgroundColor:'red'},
    info:{backgroundColor:'blue'},
    warining:{backgroundColor:'yellow'},
  });