#form表单实现代理模式跨域可以实现post请求
3000端口请求服务器3001的数据，通过服务器3001的重定向，在3000端口中的iframe中接收服务器返回的数据
并执行之前在3000端口中定义的方法。

在这个过程中，3000端口页面index.html是被代理页面 A，iframe框架是代理页面B，服务器3001端口是跨域对象C，
代理模式的本质是，A想访问C，可是由于跨域不能直接访问C，只能通过form表单的形式访问C，访问到C后由于
form表单不能直接得到请求返回的数据，所以只能通过B页面来得到返回的数据并执行A域中的方法。
#编码过程中遇到的坑
1.koa-bodyparser必须在router.routes()和router.allowedMethods()之前，否则会得不到ctx.request.body

#执行方法
cd ./CROSSDOMAIN
npm install
cd ./jsonp-form   
node static_server.js   //启动静态服务器
cd  ./server  
node app.js  //启动要跨域的服务器
