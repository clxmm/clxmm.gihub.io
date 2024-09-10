(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{337:function(s,e,r){"use strict";r.r(e);var a=r(8),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-redis的优势-能干什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis的优势-能干什么"}},[s._v("#")]),s._v(" 1.Redis的优势-能干什么")]),s._v(" "),e("ul",[e("li",[s._v("1.性能极高 – Redis能读的速度是110000次/秒,写的速度是81000次/秒")]),s._v(" "),e("li",[s._v("2.数据类型丰富，不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构")]),s._v(" "),e("li",[s._v("3.Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用")]),s._v(" "),e("li",[s._v("4.Redis支持数据的备份，即master-slave模式的数据备份")])]),s._v(" "),e("h2",{attrs:{id:"_2-redis的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis的安装"}},[s._v("#")]),s._v(" 2.Redis的安装")]),s._v(" "),e("h3",{attrs:{id:"_2-1-官网地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-官网地址"}},[s._v("#")]),s._v(" 2.1 官网地址")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("中文：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.redis.cn/"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://www.redis.com.cn/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.redis.com.cn/documentation.html"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"_2-2-下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-下载安装"}},[s._v("#")]),s._v(" 2.2 下载安装")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("安装包： "),e("a",{attrs:{href:"https://redis.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/download/"),e("OutboundLink")],1)])]),s._v(" "),e("li",[e("p",[s._v("docker 安装")])])]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[s._v("  version: '3'\n  services:\n    redis:\n      image: registry.cn-hangzhou.aliyuncs.com/zhengqing/redis:7.0.5                    # 镜像'redis:7.0.5'\n      container_name: redis                                                             # 容器名为'redis'\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    restart: unless-stopped                                                                   # 指定容器退出后的重启策略为始终重启，但是不考虑在Docker守护进程启动时就已经停止了的容器")]),s._v('\n      command: redis-server --requirepass 123456 --appendonly yes # 启动redis服务并添加密码为：123456,并开启redis持久化配置\n      environment:                        # 设置环境变量,相当于docker run命令中的-e\n        TZ: Asia/Shanghai\n        LANG: en_US.UTF-8\n      volumes:                            # 数据卷挂载路径设置,将本机目录映射到容器目录\n        - "./redis/data:/data"\n        - "./redis/config/redis.conf:/etc/redis/redis.conf"  # `redis.conf`文件内容`http://download.redis.io/redis-stable/redis.conf`\n      ports:                              # 映射端口\n        - "6379:6379"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("进入redis命令行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" ./redis\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行 -- 单机模式")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" docker-compose-redis.yml "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" redis up "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" redis redis-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"_2-3-文档资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-文档资料"}},[s._v("#")]),s._v(" 2.3 文档资料")]),s._v(" "),e("p",[e("strong",[s._v("源码地址")]),s._v(" "),e("a",{attrs:{href:"https://github.com/redis/redis",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/redis/redis"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("在线测试：")]),s._v(" "),e("a",{attrs:{href:"https://try.redis.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://try.redis.io/"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("参考命令：")]),s._v(" "),e("a",{attrs:{href:"http://doc.redisfans.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://doc.redisfans.com/"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);