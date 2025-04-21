import React from 'react';
import {useState} from 'react';
import {View, Button, Text, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  const [showAR, setShowAR] = useState(false);
  console.log(WebView); // لو طلع undefined يبقى المشكلة في التثبيت

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="افتح الكاميرا" onPress={() => setShowAR(!showAR)} />
      {showAR && (
        <WebView
          source={{uri: 'https://lambent-pudding-89b56e.netlify.app/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          originWhitelist={['*']}
          allowsInlineMediaPlayback
        />
      )}
    </SafeAreaView>
  );
}
