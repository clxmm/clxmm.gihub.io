(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(s,a,e){"use strict";e.r(a);var v=e(14),n=Object(v.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文档"}},[s._v("#")]),s._v(" 1.文档")]),s._v(" "),a("p",[a("strong",[s._v("官网")]),s._v(" "),a("a",{attrs:{href:"https://redis.io/docs/manual/persistence/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/docs/manual/persistence/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("中文官网："),a("a",{attrs:{href:"https://redis.com.cn/topics/persistence.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis持久化"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-redis持久化方案-rdb和aof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis持久化方案-rdb和aof"}},[s._v("#")]),s._v(" 2.Redis持久化方案（RDB和AOF）")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/redis/redis-aop-rdf.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2-1-rdb-redis-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rdb-redis-database"}},[s._v("#")]),s._v(" 2.1 RDB（Redis DataBase）")]),s._v(" "),a("ul",[a("li",[s._v("RDB（Redis 数据库）：RDB 持久性以指定的时间间隔执行数据集的时间点快照。")]),s._v(" "),a("li",[s._v("实现类似照片记录效果的方式，就是把某一时刻的数据和状态以文件的形式写到磁盘上，也就是快照。这样一来即使故障宕机，快照文件也不会丢失，数据的可靠性也就得到了保证。这个快照文件就称为RDB文件(dump.rdb)，其中，RDB就是Redis DataBase的缩写。")]),s._v(" "),a("li",[s._v("在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲的Snapshot内存快照，它恢复时再将硬盘快照文件直接读回到内存里")]),s._v(" "),a("li",[s._v("Rdb保存的是dump.rdb文件")])]),s._v(" "),a("h4",{attrs:{id:"_2-1-1-使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-使用说明"}},[s._v("#")]),s._v(" 2.1.1 使用说明")]),s._v(" "),a("p",[s._v("查找配置文件中"),a("code",[s._v("SNAPSHOTTING")]),s._v("的配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("自动触发配置")]),s._v(" "),a("ul",[a("li",[s._v("修改配置文件")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 触发规则，5s内有两次变动\nsave 5 2\n\n# 默认保存文件的名称\ndbfilename dump.rdb\n\n# 配置dump文件的保存位置。默认 ./\ndir ./back\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("重启服务")])]),s._v(" "),a("div",{staticClass:"language-redis line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('127.0.0.1:6379> CONFIG get dir\n1) "dir"\n2) "/home/app/redis/redis-7.0.0/back"\n127.0.0.1:6379> CONFIG get save\n1) "save"\n2) "5 2"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("触发")]),s._v(" "),a("p",[s._v("再5s内设置两个值")])]),s._v(" "),a("li",[a("p",[s._v("恢复")]),s._v(" "),a("ol",[a("li",[s._v("备份dump.rdb")]),s._v(" "),a("li",[s._v("清空数据库")]),s._v(" "),a("li",[s._v("停止redis服务")]),s._v(" "),a("li",[s._v("用备份的dump文件替换redis服务的dump")]),s._v(" "),a("li",[s._v("启动服务，数据恢复")])])]),s._v(" "),a("li",[a("p",[s._v("手动触发")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Redis提供了两个命令来⽣成RDB⽂件，分别是save和bgsave")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("save")]),s._v(": 在主程序中执⾏"),a("strong",[s._v("会阻塞")]),s._v(" ,当前redis服务器，直到持久化工作完成")])]),s._v(" "),a("li",[a("p",[s._v("使用save")]),s._v(" "),a("div",{staticClass:"language-redis line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("set k1 v1\nsave\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("c(默认)")])]),s._v(" "),a("li",[a("p",[s._v("Redis会在后台异步进行快照操作，"),a("strong",[s._v("不阻塞")]),s._v(",快照同时还可以响应客户端请求,该触发方式会fork一个子进程由子进程复制持久化过程。")])]),s._v(" "),a("li",[a("p",[s._v("Redis会使用bgsave对当前内存中的所有数据做快照，这个操作是子进程在后台完成的，这就允许主进程同时可以修改数据。")])]),s._v(" "),a("li",[a("p",[s._v("使用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 k2\nsave\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("可以通过lastsave命令获取最后一次成功执行快照的时间")])])])]),s._v(" "),a("li",[a("p",[s._v("优势")]),s._v(" "),a("ul",[a("li",[s._v("适合大规模的数据恢复")]),s._v(" "),a("li",[s._v("按照业务定时备份")]),s._v(" "),a("li",[s._v("对数据完整性和一致性要求不高")]),s._v(" "),a("li",[s._v("RDB 文件在内存中的加载速度要比 AOF 快得多")])])]),s._v(" "),a("li",[a("p",[s._v("劣势")]),s._v(" "),a("ul",[a("li",[s._v("在一定间隔时间做一次备份，所以如果redis意外down掉的话，就会丢失从当前至最近一次快照期间的数据，")]),s._v(" "),a("li",[s._v("内存数据的全量同步，如果数据量太大会导致I/0严重影响服务器性能")]),s._v(" "),a("li",[s._v("RDB依赖于主进程的fork，在更大的数据集中，这可能会导致服务请求的瞬间延迟。fork的时候内存中的数据被克隆了一份，大致2倍的膨胀性，需要考虑")]),s._v(" "),a("li",[s._v("数据丢失案列\n"),a("ul",[a("li",[s._v("正常录入数据")]),s._v(" "),a("li",[s._v("kill -9故意模拟意外down机")]),s._v(" "),a("li",[s._v("redis重启恢复，查看数据是否丢失")])])])])]),s._v(" "),a("li",[a("p",[s._v("如何检查修复dump.rdb文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("redis-check-rdb ./back/dump.rdb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("哪些情况会触发RDB快照")]),s._v(" "),a("ul",[a("li",[s._v("配置文件中默认的快照配置")]),s._v(" "),a("li",[s._v("手动save/bgsave命令")]),s._v(" "),a("li",[s._v("执行flushall/flushdb命令也会产生dump.rdb文件，但里面是空的，无意义")]),s._v(" "),a("li",[s._v("执行shutdown且没有设置开启AOF持久化")]),s._v(" "),a("li",[s._v("主从复制时，主节点自动触发")])])]),s._v(" "),a("li",[a("p",[s._v("如何禁用快照")])]),s._v(" "),a("li",[a("p",[s._v("RDB优化配置项详解")]),s._v(" "),a("ul",[a("li",[a("p",[s._v('动态所有停止RDB保存规则的方法：redis-cli config set save ""')])]),s._v(" "),a("li",[a("p",[s._v("快照禁用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('save ""\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])])]),s._v(" "),a("li",[a("p",[s._v("RDB优化配置项详解")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置文件SNAPSHOTTING模块")])]),s._v(" "),a("li",[a("p",[s._v("save "),a("code",[s._v("<seconds> <changes>")])])]),s._v(" "),a("li",[a("p",[s._v("dbfilename")])]),s._v(" "),a("li",[a("p",[s._v("dir")])]),s._v(" "),a("li",[a("p",[s._v("stop-writes-on-bgsave-error")]),s._v(" "),a("p",[s._v("默认 "),a("strong",[s._v("yes")]),s._v(" 如果配置成no，表示你不在乎数据不一致或其它方式发现数据不一致，在快照写入失败时，也能确保redis继续接受新的写请求")])]),s._v(" "),a("li",[a("p",[s._v("rdbcompression")]),s._v(" "),a("p",[s._v("默认"),a("strong",[s._v("yes")]),s._v("，设置进行压缩存储。")])]),s._v(" "),a("li",[a("p",[s._v("rdbchecksum")]),s._v(" "),a("p",[s._v("默认"),a("strong",[s._v("yes")]),s._v("，存储快照后，利用算法对数据进行校验。")])]),s._v(" "),a("li",[a("p",[s._v("rdb-del-sync-files")]),s._v(" "),a("p",[s._v("默认"),a("strong",[s._v("no")]),s._v(" 在没有持久性的情况下，删除复制中的rdb文件。")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-aof-append-only-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aof-append-only-file"}},[s._v("#")]),s._v(" 2.2 AOF（Append Only File）")]),s._v(" "),a("h4",{attrs:{id:"_2-2-1-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-是什么"}},[s._v("#")]),s._v(" 2.2.1 是什么")]),s._v(" "),a("p",[a("strong",[s._v("以日志的形式来记录每个写操作")]),s._v(" 将redis执行过的所有写指令记录下来，只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作")]),s._v(" "),a("p",[s._v("默认情况下，redis是没有开启AOF(append only file)的。开启AOF功能需要设置配置：appendonly yes")]),s._v(" "),a("h4",{attrs:{id:"_2-2-2-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-文件"}},[s._v("#")]),s._v(" 2.2.2 文件")]),s._v(" "),a("p",[s._v("Aof保存的是appendonly.aof文件")]),s._v(" "),a("h4",{attrs:{id:"_2-2-3-aof持久化工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-aof持久化工作流程"}},[s._v("#")]),s._v(" 2.2.3 AOF持久化工作流程")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/redis/redis02-aof.png",alt:""}})]),s._v(" "),a("ol",[a("li",[s._v("Client作为命令的来源，会有多个源头以及源源不断的请求命令。")]),s._v(" "),a("li",[s._v("在这些命令到达Redis Server 以后并不是直接写入AOF文件，会将其这些命令先放入AOF缓存中进行保存。这里的AOF缓冲区实际上是内存中的一片区域，存在的目的是当这些命令达到一定量以后再写入磁盘，避免频繁的磁盘IO操作。")]),s._v(" "),a("li",[s._v("AOF缓冲会根据AOF缓冲区同步文件的三种写回策略将命令写入磁盘上的AOF文件。")]),s._v(" "),a("li",[s._v("随着写入AOF内容的增加为避免文件膨胀，会根据规则进行命令的合并(又称AOF重写)，从而起到AOF文件压缩的目的。")]),s._v(" "),a("li",[s._v("当Redis Server 服务器重启的时候会从AOF文件载入数据。")])]),s._v(" "),a("h4",{attrs:{id:"_2-2-4-aof缓冲区三种写回策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-aof缓冲区三种写回策略"}},[s._v("#")]),s._v(" 2.2.4 AOF缓冲区三种写回策略")]),s._v(" "),a("p",[a("strong",[s._v("三种写回策略")])]),s._v(" "),a("ol",[a("li",[s._v("Always: 同步写回，每个写命令执行完立刻同步地将日志写回磁盘")]),s._v(" "),a("li",[s._v("everysec: 每秒写回，每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，每隔1秒把缓冲区中的内容写入磁盘")]),s._v(" "),a("li",[s._v("no :操作系统控制的写回，每个写命令执行完，只是先把日志写到AOF文件的内存缓冲区，由操作系统决定何时将缓冲区内容写回磁盘")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/redis/redis02-aof1.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"_2-2-5-aof的开启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-aof的开启"}},[s._v("#")]),s._v(" 2.2.5 AOF的开启")]),s._v(" "),a("p",[s._v("开启配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认 no")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("默认写回策略")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# appendfsync always\nappendfsync everysec\n# appendfsync no\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("aof的保存路径")]),s._v(" redis7")]),s._v(" "),a("p",[s._v("dir+appenddirname")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rdb的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" ./back\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For convenience, Redis stores all persistent append-only files in a dedicated")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# directory. The name of the directory is determined by the appenddirname")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# configuration parameter.")]),s._v("\n\nappenddirname "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonlydir"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# aof文件的最终路径 ./back/appendonlydir")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("配置文件名称")]),s._v("redis7")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# base基本文件 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - appendonly.aof.1.base.rdb as a base file.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# incr增量文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - appendonly.aof.1.incr.aof, appendonly.aof.2.incr.aof as incremental files.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# manifest清单文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - appendonly.aof.manifest as a manifest file.")]),s._v("\n\nappendfilename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("重启redis,")]),s._v(" "),a("p",[s._v("查看保存的aop文件")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-aof202408142059465.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"_2-2-5-数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-数据恢复"}},[s._v("#")]),s._v(" 2.2.5 数据恢复")]),s._v(" "),a("p",[a("strong",[s._v("正常恢复")])]),s._v(" "),a("ul",[a("li",[s._v("启动：设置Yes，修改默认的appendonly no，改为yes")]),s._v(" "),a("li",[s._v("写操作继续，生成aof文件到指定的目录")]),s._v(" "),a("li",[s._v("恢复1\n"),a("ul",[a("li",[s._v("恢复1：重启redis然后重新加载，结果OK")])])]),s._v(" "),a("li",[s._v("恢复2\n"),a("ul",[a("li",[s._v("写入数据进redis，然后flushdb+shutdown服务器")]),s._v(" "),a("li",[s._v("新生成了dump和aof")]),s._v(" "),a("li",[s._v("备份新生成的aof.bak，然后删除dump/aof再看恢复")]),s._v(" "),a("li",[s._v("重启redis然后重新加载试试？？？")]),s._v(" "),a("li",[s._v("停止服务器，拿出我们的备份修改后再重新启动服务器看看")])])])]),s._v(" "),a("p",[a("strong",[s._v("异常恢复")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("故意乱写正常的AOF文件，模拟网络闪断文件写error")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /myredis/appendonlydir/appendonly.aof.1.incr.aof\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("重启 Redis 之后就会进行 AOF 文件的载入，发现启动都不行，o(╥﹏╥)o")])]),s._v(" "),a("li",[a("p",[s._v("异常修复命令：redis-check-aof --fix 进行修复")])]),s._v(" "),a("li",[a("p",[s._v("重新OK")])])]),s._v(" "),a("h4",{attrs:{id:"_2-2-6-优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-优势"}},[s._v("#")]),s._v(" 2.2.6 优势")]),s._v(" "),a("p",[s._v("更好的保护数据不丢失 、性能高、可做紧急恢复")]),s._v(" "),a("h4",{attrs:{id:"_2-2-7-劣势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-劣势"}},[s._v("#")]),s._v(" 2.2.7 劣势")]),s._v(" "),a("p",[s._v("相同数据集的数据而言aof文件要远大于rdb文件，恢复速度慢于rdb，")]),s._v(" "),a("p",[s._v("aof运行效率要慢于rdb,每秒同步策略效率较好，不同步效率和rdb相同")]),s._v(" "),a("h4",{attrs:{id:"_2-2-8⭐aof重写机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8⭐aof重写机制"}},[s._v("#")]),s._v(" 2.2.8⭐AOF重写机制")]),s._v(" "),a("p",[s._v("由于AOF持久化是Redis不断将写命令记录到 AOF 文件中，随着Redis不断的进行，AOF 的文件会越来越大，")]),s._v(" "),a("p",[s._v("文件越大，占用服务器内存越大以及 AOF 恢复要求时间越长。")]),s._v(" "),a("p",[s._v("为了解决这个问题，Redis新增了重写机制，当AOF文件的大小超过所设定的峰值时，Redis就会"),a("strong",[s._v("自动")]),s._v("启动AOF文件的内容压缩，")]),s._v(" "),a("p",[s._v("只保留可以恢复数据的最小指令集")]),s._v(" "),a("p",[s._v("或者")]),s._v(" "),a("p",[s._v("可以手动使用命令 bgrewriteaof 来重新。")]),s._v(" "),a("p",[s._v("启动AOF文件的内容压缩，只保留可以恢复数据的最小指令集。")]),s._v(" "),a("p",[a("strong",[s._v("触发机制")])]),s._v(" "),a("p",[s._v("官网默认配置：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Specify a percentage of zero in order to disable the automatic AOF")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rewrite feature.")]),s._v("\n\nauto-aof-rewrite-percentage "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nauto-aof-rewrite-min-size 64mb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("注意 ，同时满足，且的关系才会触发")]),s._v(" "),a("ol",[a("li",[s._v("根据上次重写后的aof大小，判断当前aof大小是不是增长了1倍")]),s._v(" "),a("li",[s._v("重写时满足的文件大小")])]),s._v(" "),a("ul",[a("li",[s._v("自动触发\n"),a("ul",[a("li",[s._v("满足配置文件中的选项后，Redis会记录上次重写时的AOF大小，默认配置是当AOF文件大小是上次rewrite后大小的一倍且文件大于64M时")])])]),s._v(" "),a("li",[s._v("手动触发\n"),a("ul",[a("li",[s._v("客户端向服务器发送bgrewriteaof命令")])])])]),s._v(" "),a("h4",{attrs:{id:"_2-2-8-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8-总结"}},[s._v("#")]),s._v(" 2.2.8 总结")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-aof202408142200695.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-aof202408142225209.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2-3rdb-aof混合方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3rdb-aof混合方式"}},[s._v("#")]),s._v(" 2.3RDB+AOF混合方式")]),s._v(" "),a("p",[a("strong",[s._v("数据恢复和加载流程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-cjh202408142233843.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("如何让选择")])]),s._v(" "),a("ul",[a("li",[s._v("RDB持久化方式能够在指定的时间间隔能对你的数据进行快照存储")]),s._v(" "),a("li",[s._v("AOF持久化方式记录每次对服务器写的操作,当服务器重启的时候会重新执行这些命令来恢复原始的数据,AOF命令以redis协议追加保存每次写的操作到文件末尾.")])]),s._v(" "),a("p",[a("strong",[s._v("同时开启两种持久化方式")])]),s._v(" "),a("p",[s._v("在这种情况下,**当redis重启的时候会优先载入AOF文件来恢复原始的数据,**因为在通常情况下AOF文件保存的数据集要比RDB文件保存的数据集要完整.")]),s._v(" "),a("p",[s._v("RDB的数据不实时，同时使用两者时服务器重启也只会找AOF文件。"),a("strong",[s._v("作者建议不要")]),s._v("，因为RDB更适合用于备份数据库(AOF在不断变化不好备份)，留着rdb作为一个万一的手段。")]),s._v(" "),a("p",[a("strong",[s._v("推荐方式")])]),s._v(" "),a("p",[s._v("RDB+AOF混合方式")]),s._v(" "),a("p",[s._v("结合了RDB和AOF的优点，既能快速加载又能避免丢失过多的数据。")]),s._v(" "),a("ol",[a("li",[s._v("开启混合方式设置")])]),s._v(" "),a("p",[s._v("设置aof-use-rdb-preamble的值为 yes  yes表示开启，设置为no表示禁用")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("RDB+AOF的混合方式---------\x3e 结论：RDB镜像做全量持久化，AOF做增量持久化")]),s._v(" "),a("p",[s._v("先使用RDB进行快照存储，然后使用AOF持久化记录所有的写操作，当重写策略满足或手动触发重写的时候，将最新的数据存储为新的RDB记录。这样的话，重启服务的时候会从RDB和AOF两部分恢复数据，既保证了数据完整性，又提高了恢复数据的性能。")])])]),s._v(" "),a("p",[s._v("简单来说：混合持久化方式产生的文件一部分是RDB格式，一部分是AOF格式。"),a("strong",[s._v("----》AOF包括了RDB头部+AOF混写")])]),s._v(" "),a("h3",{attrs:{id:"_2-4-纯缓存模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-纯缓存模式"}},[s._v("#")]),s._v(" 2.4 纯缓存模式")]),s._v(" "),a("p",[s._v("同时关闭RDB+AOF，")]),s._v(" "),a("ul",[a("li",[s._v('save ""\n'),a("ul",[a("li",[s._v("禁用rdb")]),s._v(" "),a("li",[s._v("禁用rdb持久化模式下，我们仍然可以使用命令save、bgsave生成rdb文件")])])]),s._v(" "),a("li",[s._v("appendonly no\n"),a("ul",[a("li",[s._v("禁用aof")]),s._v(" "),a("li",[s._v("禁用aof持久化模式下，我们仍然可以使用命令bgrewriteaof生成aof文件")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);