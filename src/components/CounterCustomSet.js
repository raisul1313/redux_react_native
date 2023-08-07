import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function CounterCustomSet({setcustomValueParentSate}) {
  const [customValue, setcustomValue] = useState('1');
  const applyChangesInState = text => {
    setcustomValue(text);
    setcustomValueParentSate(text);

  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        value={customValue}
        style={{borderWidth: 1, width: '80%', borderColor: 'white'}}
        onChangeText={text => applyChangesInState(text)}
      />
    </View>
  );
}
