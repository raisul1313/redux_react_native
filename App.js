// import {View, Text} from 'react-native';
// import React, {useState} from 'react';

// import CounterScreen from './src/screens/CounterScreen';
// import CounterCustomSet from './src/components/CounterCustomSet';

// export default function App() {
//   const [customValueParentSate, setcustomValueParentSate] = useState(1);
//   return (
//     <View style={{flex: 1}}>
//       <CounterScreen customValueParentSate = {customValueParentSate}/>
//       <CounterCustomSet setcustomValueParentSate = {setcustomValueParentSate}/>
//     </View>
//   );
// }

import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/Redux/store';

import Home from './src/screens/Home';
import CounterScreen from './src/screens/CounterScreen';

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
