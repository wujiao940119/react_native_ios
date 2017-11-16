import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import FadeInView from '../components/FadeInView';
import {shareSleepNetwork} from '../utils/network';
import {convert_BD09_To_GCJ02} from '../utils/util';


export default class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activitys: []
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
            console.log('test==============================')
            let data = JSON.parse(res._bodyInit);
            console.log(JSON.parse(res._bodyInit));
            that.setState({
                activitys: data.activitys,
                recommends: data.sections[0]
            })
        })
    }

    render() {
        let {activitys} = this.state;
        console.log('test1111111111111111');
        console.log(activitys)
        return (
            <FadeInView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue' }}>
                {activitys && activitys.length>0 ? 
                <Image source={{uri: activitys[0].img_url+'_750'}} style={{width:200,height:200}}/>:null}
            </FadeInView>
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