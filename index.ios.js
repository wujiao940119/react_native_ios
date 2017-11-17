import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import Root from './src/root';
import {setSpText,scaleSize} from './src/utils/screen';
import {Dimensions,PixelRatio} from 'react-native';
console.log('lalla======')

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <View style={{width:scaleSize(375),height:300,backgroundColor:'#ff0'}}></View>
        <Text style={{fontSize: 30}}>没适配,本机像素：{PixelRatio.get()}</Text>
        <Text style={{fontSize: setSpText(30)}}>已适配</Text>
        <Root/>
      </View>
    );
  }
}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('MyApp', () => MyApp);