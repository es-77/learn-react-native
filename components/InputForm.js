import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
const InputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(true);
  };

  const handleClear = ()=>{
        setName('');
        setEmail('');
        setPassword('');
        setDisplay(false);
  }

  return (
    <>
      <View>
        <TextInput
          style={({fontSize: 50}, style.textinput)}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter your Name"
        />
        <TextInput
          style={({fontSize: 50}, style.textinput)}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your Email"
        />
        <TextInput
          style={({fontSize: 50}, style.textinput)}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your Password"
        />

        <View style={style.buttonMargin}>
          <Button title="print value" onPress={() => handleDisplay()} />
        </View>
        <Button title="clear form"  onPress={()=>handleClear()}/>

        {display ? (
          <View>
            <Text>User name is : {name}</Text>
            <Text>User Email is : {email}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

export default InputForm;

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
