## JSONP原理
我们可以将一些js、css等文件放在第三方的服务器上面，如CDN等来加快网页的打开速度，这样是没有任何问题的，也就是说web页面可以加载放在任意站点的js、css、图片等资源，不会受到"跨域"的影响。这个时候，我们会想到：既然我们可以调用第三方站点的js,那么如果我们将数据放到第三方站点的js中不就可以将数据带到客户端了吗？

## 执行方法
```
cd ./CROSSDOMAIN
npm install
cd ./1-jsonp-basic   
node static_server.js   //启动静态服务器1
cd  ./server  
node static_server.js  //启动静态服务器2
```


