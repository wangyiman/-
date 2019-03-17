## window.postMessage + iframe


## 遇到的坑：
postMessage的第二个参数是*才能发送消息，否则同样会遇到跨域问题。
## 常用方法：
1、子页面向父页面发送消息
var parentData = {type: 'passDataBack', data: passData};
window.parent.postMessage(parentData, '*');
 
2、父页面向子页面发送消息
var data = {type: 'answerResult', data: jsonData.data};
$(".courseware_h5 iframe")[0].contentWindow.postMessage(data, '*');
 
3、接收消息方法
window.addEventListener('message', function (e) {
})
