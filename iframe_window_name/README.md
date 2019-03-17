## window.name + 动态的iframe
window.name在另一个域中，创建完iframe后，第一次加载前指定iframe的src是要跨域的url，第一次加载立刻指定src是本域的url。
这样浏览器在第二次iframe load完成的时候就可以获取到window.contentWindow.name，实现跨域
