import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import Root from './src/root';
import {PixelRatio,Dimensions} from 'react-native';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);

let designSize = {width:750,height:1336};

let pxRatio = PixelRatio.get();
let win_width = Dimensions.get("window").width;
let win_height = Dimensions.get("window").height;

let width = pt2px(win_width);
let height = pt2px(win_height);

let design_scale = designSize.width/width;
height = height*design_scale

let scale = 1/pxRatio/design_scale;

const styles={
  container: {
        width:width,
        height:height,
        transform:[{translateX:-width*.5},
                    {translateY:-height*.5},
                    {scale:scale},
                    {translateX:width*.5},
                    {translateY:height*.5}]
    },
}
console.log('test22222222')
console.log(styles);

export default class MyApp extends Component {
  render() {
    return (
      <View sytle={styles.container}>
        <Root/>
      </View>
    );
  }
}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('MyApp', () => MyApp);