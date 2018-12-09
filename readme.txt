安装小程序开发工具
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018413



项目运行步骤
1.使用npm install wepy-cli -g下载wepy
2.使用npm install 安装所有需要的依赖
3.使用wepy build --watch 编译项目

静态资源上传方法
1.进入script目录, 查看是否存在vendor目录, 如果不存在则执行composer install
2.执行 php uploadStatic.php
