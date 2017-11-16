/**
 * 百度经纬度转腾讯经纬度(中国经纬度)
 */

function convert_BD09_To_GCJ02(latitude,longitude) {
  var x = longitude - 0.0065
  var y = latitude - 0.006
  var x_pi = 3.14159265358979324 * 3000.0 / 180.0
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi) 
  var theta = Math.atan2(y,x) - 0.000003 * Math.cos(x*x_pi)
  longitude = z*Math.cos(theta)
  latitude = z*Math.sin(theta)
  return { 'latitude': latitude, 'longitude': longitude }
}

module.exports = {
    convert_BD09_To_GCJ02
}