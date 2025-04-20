import React, {useState} from 'react';
import {View, Button} from 'react-native';
import ARScreen from './ARScreen'; // الشاشة اللي فيها AR view

export default function App() {
  const [showAR, setShowAR] = useState(false);

  return (
    <View style={{flex: 1}}>
      {!showAR ? (
        <Button title="افتح الكاميرا" onPress={() => setShowAR(true)} />
      ) : (
        <ARScreen />
      )}
    </View>
  );
}
