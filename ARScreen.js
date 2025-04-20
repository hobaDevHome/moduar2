import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';
import ARScene from './ARScene';

export default function ARScreen() {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{scene: ARScene}}
      worldAlignment="Gravity"
    />
  );
}
