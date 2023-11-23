import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const RadioButton = () => {
  const [selectRadio, setSelectRadio] = useState(1);

  return (
    <View>
      <Text style={styles.label}>Select gender</Text>
      <TouchableOpacity onPress={() => setSelectRadio(1)}>
        <View style={styles.mainWrapper}>
          <Text style={styles.label}> Male {selectRadio}  {(selectRadio === 1)? 'yes':'no'} </Text>
          <Text style={styles.radio}>
            {selectRadio === 1 ? <View style={styles.radioBackground}></View> : null}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectRadio(2)}>
        <View style={styles.mainWrapper}>
          <Text style={styles.label}> Female {selectRadio} {(selectRadio === 1)? 'yes':'no'} </Text>
          <Text style={styles.radio}>
            {selectRadio === 2 ? <View style={styles.radioBackground}></View> : null}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10, 
  },
  label: {
    fontSize: 30,
    color: 'red',
  },
  mainWrapper: {
    flexDirection: 'row',
    margin: 3,
    padding: 2,
  },
  radioBackground: {
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 20,
    height: 28,
    width: 28,
    alignItems: 'center',
  }
});
