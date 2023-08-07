import {View, TextInput} from 'react-native';
import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import CounterView from '../components/CounterView';
import CounterControllers from '../components/CounterControllers';

import {setCustomValueAction} from "../Redux/Action/Counter/counterAction"

export default function CounterScreen({customValueParentSate}) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CounterView counterValue={counter.count} />
      <CounterControllers />
      <TextInput
        value={counter.changeValue}
        style={{
          borderWidth: 1,
          width: '80%',
          marginTop: 30,
          borderColor: 'white',
        }}
        onChangeText={text => dispatch(setCustomValueAction(text))}
      />
    </View>
  );
}
