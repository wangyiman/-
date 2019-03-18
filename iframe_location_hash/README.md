## location.hash + iframe
a.html(通过iframe请求b) ——> b.html(通过iframe请求c) ——> c.html(通过parent.parent获取到a)
a.html一直监听自己hash值的变化，通过c.html获取到b.html里的传值，并改变a.html的hash值
## 遇到的坑：
几种全局编码方式复习：
https://www.cnblogs.com/season-huang/p/3439277.html
http://www.w3school.com.cn/jsref/jsref_obj_global.asp
