import React from 'react'
import {View, Text, Button} from 'react-native'
const PageButtonOnpress = () => {

    const handleFunction = ()=>{
        alert("check console")
        console.warn("data console ")
    }
  return (
    <View>
      <Text style={{fontSize: 50}}>Button on press</Text>
      <Button title="click me" onPress={(e)=>alert(213)} ></Button>
      <Text> function call</Text>
      <Button title="call a fuction" onPress={(e)=>handleFunction()}></Button>
    </View>
  );
};

export default PageButtonOnpress;
