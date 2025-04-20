import React, {useEffect} from 'react';
import {
  ViroARScene,
  ViroARImageMarker,
  ViroARTrackingTargets,
  Viro3DObject,
} from '@viro-community/react-viro';

export default function ARScene() {
  useEffect(() => {
    ViroARTrackingTargets.createTargets({
      targetOne: {
        source: require('./res/target.jpg'),
        orientation: 'Up',
        physicalWidth: 0.1, // 10 سم
      },
    });
  }, []);

  return (
    <ViroARScene>
      <ViroARImageMarker target="targetOne">
        <Viro3DObject
          source={{uri: 'file:///android_asset/model.glb'}}
          type="GLB"
          scale={[0.01, 0.01, 0.01]}
          position={[0, 0, 0]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
}
