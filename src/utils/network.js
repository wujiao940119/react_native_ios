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
    fetch('https://www.xiangshuispace.com/api/'+api, requestConstuctor).then((response) => {
        complete(response);
    }).catch((error)=> {
        alert(error)
    })
}
module.exports = {
    shareSleepNetwork
}