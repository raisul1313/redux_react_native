import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import {incremnetDecrementValueAction} from '../Redux/Action/Counter/counterAction';

export default function CounterControllers({}) {
  const dispatch = useDispatch();
  const incrementValue = () => {
    dispatch(incremnetDecrementValueAction('increment'));
  };
  const decrementValue = () => {
    dispatch(incremnetDecrementValueAction('decrement'));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '70%',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'white', padding: 10}}
        onPress={() => decrementValue()}>
        <Text style={{fontSize: 20, color: 'black'}}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'white', padding: 10}}
        onPress={() => incrementValue()}>
        <Text style={{fontSize: 20, color: 'black'}}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}
