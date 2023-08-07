import {View, Text} from 'react-native';
import React from 'react';

export default function CounterView({counterValue}) {
  return (
    <View style={{marginBottom: 60}}>
      <Text style={{fontSize: 100, fontWeight: 'bold'}}>{counterValue}</Text>
    </View>
  );
}
