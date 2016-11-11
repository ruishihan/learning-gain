#javascript 操作HTML元素
*使用 document.getElementById(id) 方法*

- 改变HTML元素的内容：document.getElementById(id).innerHTML=""

- 写到文档输出：document.write("")

- 请使用 document.write() 仅仅向文档输出写内容。如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖

- 如需改变 HTML 元素的属性document.getElementById(id).attribute=new value
例如：document.getElementById("image").src="landscape.jpg";

- 通过getElementsByTagName(),来访问HTML元素

- document.form.getElementsByName("Name")获得的是对象集合，它不是单个元素。

- 如需改变 HTML 元素的样式，请使用这个语法：`document.getElementById(id).style.property=new style`
`document.getElementById("p2").style.color="blue"`

- button触发`<button type="button" 
onclick="document.getElementById('id1').style.color='red'">
点击这里！</button>`

- style.color	style.visibility='hidden'/'visible'
[style手册](http://www.w3school.com.cn/jsref/dom_obj_style.asp)
