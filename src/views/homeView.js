import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import FadeInView from '../components/FadeInView';
import {shareSleepNetwork} from '../utils/network';
import {convert_BD09_To_GCJ02} from '../utils/util';
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
      width:750
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#ff0',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
      width: 750,
      height: 200
  },
  test: {
      width: 300,
      height:300,
      backgroundColor: '#92bbd9'
  }
})
export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activitys: [],
            img_url:''
        };

    }

    // 请求首页数据
    requestAreaList = ()=>{
        var that = this;
        let correctUrl = '';
        if (isNaN(that.state.initialPosition.latitude)) {
            correctUrl = "capsule/getarearecommend";
        } else {
            correctUrl = "capsule/getarearecommend?latitude=" + parseInt(parseFloat(that.state.initialPosition.latitude) * 1000000) + "&longitude=" + parseInt(parseFloat(that.state.initialPosition.longitude) * 1000000)
        }
        shareSleepNetwork(correctUrl,{},'GET',function complete(res){
            console.log('response==============================')
            let data = JSON.parse(res._bodyInit);
            console.log(JSON.parse(res._bodyInit));
            that.setState({
                activitys: data.activitys,
                recommends: data.sections[0],
                img_url: (data.activitys)[0].img_url
            })
        })
        // <Swiper style={styles.wrapper} showsButtons={true}>
        //         {test ? test : null}
        //     </Swiper>
    }

    render() {
        let {activitys,img_url} = this.state;
        let test;
        if(activitys && activitys.length>0){
            test = activitys.map((item,index)=>{
            return <View style={styles.slide1} key={index}>
                    <Image style={styles.img} source={{uri: item.img_url+'_750'}}/>
                </View>
            })
        }else{
            return null
        }
        
        return (
            
            <View style={styles.test}></View>
        );
        
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            var initialPosition = convert_BD09_To_GCJ02(position.coords.latitude,position.coords.longitude);
            this.setState({initialPosition:{latitude: 39.90995395505076, longitude: 116.41403267187808}});
            this.requestAreaList();
            console.log(initialPosition)
            },(error) => alert(error.message),{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    
}