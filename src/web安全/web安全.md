### 常见客户端安全问题
- 1. 钓鱼
- 2. 暗链
- 3. XSS
- 4. 点击劫持
- 5. CSRF
- 6. URL跳转

### 服务端安全问题
- 1. SQL 注入
- 2. 命令注入
- 3. 文件上传
- 4. 文件包含
- 5. 暴力破解

### web与服务器详细通信过程
> URL：统一资源定位符(Unidorm Resource Locator),可以支持http ftp......等协议.
URL 的详细格式
schema://host[:port#]/path/.../[?query-string][#anchor];
![Alt text](F:/WEB/JSlearn/src/web安全/img/URL.png)
一个完整的url示例
![Alt text](F:/WEB/JSlearn/src/web安全/img/URLCASE.png)

### URL 编码
> url 一般是由数字私募组成，如果在url中出现汉字，该如何加入到url中呢？

+ 编码方式：url编码就是一个字符ascii的十六进制，并在十六进制前面加上百分号,类似于 encodeURI/decodeURI
    > 例如"\"，它的ascii码是92,92的十六进制是5c，所以"\"的url编码就是%5c。
+ url 编码查询网站
    > http://tool.chinaz.com/tools/urlencode.aspx
  ```javascript
    encodeURI('http://www.百度.com');  // 编码 "http://www.%E7%99%BE%E5%BA%A6.com"
    decodeURI('http://www.%E7%99%BE%E5%BA%A6.com'); // 解码 "http://www.百度.com"
    encodeURIComponent('http://www.百度.com')  /// 编码 "http%3A%2F%2Fwww.%E7%99%BE%E5%BA%A6.com"
    decodeURIComponent("http%3A%2F%2Fwww.%E7%99%BE%E5%BA%A6.com"); // 解码 "http://www.百度.com"
  ```

### HTTP
> 超文本传输协议 Hyper Text Transfer Protocol，是web通信时使用的协议。

- 请求方式
  + 1. HEAD 与get请求类似，不同在与服务器只返回http头部信息，没有页面内容
  + 2. PUT 上传指定URL的描述
  + 3. DELETE 删除指定资源
  + 4. OPTIONS 返回服务器支持的http方法

- http请求 -- referer
  + Request Headers Referer: https://m.kaola.com/  告知服务器该请求的来源（浏览器自动加上）。
  + 作用: 1. 统计流量：CNZZ、百度统计 2. 判断请求来源的合法性：防止盗链，防止CSRF漏洞。

### XSS Cross site script
> 概念：黑客通过“html注入”篡改页面，插入恶意的脚本，当用户在浏览网页时，实现控制用户浏览器行为的一种攻击方式。
+ XSS 分类
    - 1. 存储型  访问网站，触发xss
    - 2. 反射型  访问携带xss脚本的链接，触发xss
    - 3. DOM型   访问携带xss脚本的链接，触发xss

### CSRF 
> 概念：跨站请求网站(Cross-site request forgery)，利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。
危害：执行恶意操作（"被转帐" "被发垃圾评论"等） 制造蠕虫