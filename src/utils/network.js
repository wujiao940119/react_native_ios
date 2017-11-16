function shareSleepNetwork(api, data, method, complete){
    let requestConstuctor = {};
    let headers = {
        'content-type': 'application/json',
        'User-Uin': 100000,
        'Req-From': 'react-native-ios-app'
    };
    if(method == 'POST'){
        requestConstuctor = {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        }
    }else if(method == 'GET'){
        requestConstuctor = {
            method: method,
            headers: headers
        }
    }
    //'http://dev.xiangshuispace.com:18083/api/'
    fetch('http://dev.xiangshuispace.com:18083/api/'+api, requestConstuctor).then((response) => {
        complete(response);
    }).catch((error)=> {
        console.log('error====================');
        console.log(error)
        alert(error)
    })
}
module.exports = {
    shareSleepNetwork
}