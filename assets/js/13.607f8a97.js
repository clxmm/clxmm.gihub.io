(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis事务"}},[s._v("#")]),s._v(" "),t("strong",[s._v("redis事务")])]),s._v(" "),t("h2",{attrs:{id:"_1-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-是什么"}},[s._v("#")]),s._v(" 1.是什么")]),s._v(" "),t("p",[s._v("可以一次执行多个命令，本质是一组命令的集合。一个事务中的所有命令都会序列化，"),t("strong",[s._v("按顺序地串行化执行而不会被其它命令插入，不许加塞")])]),s._v(" "),t("h2",{attrs:{id:"_2-能干什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-能干什么"}},[s._v("#")]),s._v(" 2.能干什么")]),s._v(" "),t("p",[t("strong",[s._v("一个队列中，一次性、顺序性、排他性的执行一系列命令")])]),s._v(" "),t("h2",{attrs:{id:"_3-redis事务-vs-数据库事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis事务-vs-数据库事务"}},[s._v("#")]),s._v(" 3.Redis事务 VS 数据库事务")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("1 单独的隔离操作")]),s._v(" "),t("th",[s._v("Redis的事务仅仅是保证事务里的操作会被连续独占的执行，redis命令执行是单线程架构，在执行完事务内所有指令前是不可能再去同时执行其他客户端的请求的")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("2 没有隔离级别的概念")]),s._v(" "),t("td",[s._v("因为事务提交前任何指令都不会被实际执行，也就不存在”事务内的查询要看到事务里的更新，在事务外查询不能看到”这种问题了")])]),s._v(" "),t("tr",[t("td",[s._v("3不保证原子性")]),s._v(" "),t("td",[s._v("不保证原子性，也就是不保证所有指令同时成功或同时失败，只有决定是否开始执行全部指令的能力，没有执行到一半进行回滚的能力")])]),s._v(" "),t("tr",[t("td",[s._v("4 排它性")]),s._v(" "),t("td",[s._v("Redis会保证一个事务内的命令依次执行，而不会被其它命令插入")])])])]),s._v(" "),t("h2",{attrs:{id:"_4-如何使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何使用"}},[s._v("#")]),s._v(" 4.如何使用")]),s._v(" "),t("p",[t("strong",[s._v("常用命令")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/redis/redis-transactions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 事务 | 菜鸟教程 (runoob.com)"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("strong",[s._v("常见操作")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("case1：正常执行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k3 v3\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INCR count\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EXEC\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k3\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v3"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("case2:放弃执行")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k3 v3\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INCR count\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" DISCARD\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k3\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v3"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get count\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("case3: 全体连坐-全部失败")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k3\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ERR wrong number of arguments "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'set'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EXEC\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" EXECABORT Transaction discarded because of previous errors.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("case4：冤头债主-成功的成功，失败的失败")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" email "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("@qq.com\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INCR email\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INCR count\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EXEC\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ERR value is not an integer or out of range\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("case5：watch监控")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Redis使用Watch来提供乐观锁定，类似于CAS(Check-and-Set)")]),s._v(" "),t("ul",[t("li",[s._v("悲观锁： 悲观锁(Pessimistic Lock), 顾名思义，就是很悲观，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁。")]),s._v(" "),t("li",[s._v("乐观锁： 乐观锁(Optimistic Lock), 顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据。乐观锁策略:提交版本必须  大于  记录当前版本才能执行更新")]),s._v(" "),t("li",[s._v("CAS：")])])]),s._v(" "),t("li",[t("p",[s._v("watch：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("正常情况下：初始化k1和balance两个key,先监控再开启multi，保证两key变动在同一个事务内")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 abc\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" WATCH balance\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 abc2\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" balance "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v("\nQUEUED\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EXEC\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k1\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc2"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get balance\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"110"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("监控的数据被修改：")]),s._v(" "),t("p",[t("strong",[s._v("watch命令是一种乐观锁的实现，Redis在修改的时候会检测数据是否被更改，如果更改了，则执行失败")])]),s._v(" "),t("p",[t("strong",[s._v("第一个窗口蓝色框第5步执行结果返回为空，也就是相当于是失败，笔记见最下面官网说明")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redi-sw202408162310431.png",alt:""}})])])])]),s._v(" "),t("li",[t("p",[s._v("unwatch：")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202408162311820.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_5-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[s._v("#")]),s._v(" 5. 总结")]),s._v(" "),t("ul",[t("li",[s._v("开启：以MULTI开始一个事务")]),s._v(" "),t("li",[s._v("入队：将多个命令入队到事务中，接到这些命令并不会立即执行，")]),s._v(" "),t("li",[s._v("执行：由EXEC命令触发事务")])])])]),s._v(" "),t("h1",{attrs:{id:"redis-管道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-管道"}},[s._v("#")]),s._v(" redis 管道")]),s._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("如何优化频繁命令往返造成的性能瓶颈？")]),s._v(" "),t("p",[t("strong",[s._v("问题由来")])]),s._v(" "),t("p",[s._v("Redis是一种基于客户端-服务端模型以及请求/响应协议的TCP服务。一个请求会遵循以下步骤：")]),s._v(" "),t("ul",[t("li",[s._v("1 客户端向服务端发送命令分四步(发送命令→命令排队→命令执行→返回结果)，并监听Socket返回，通常以阻塞模式等待服务端响应。")]),s._v(" "),t("li",[s._v("2 服务端处理命令，并将结果返回给客户端。")])]),s._v(" "),t("p",[t("strong",[s._v("上述两步称为：Round Trip Time(简称RTT,数据包往返于两端的时间)，问题笔记最下方")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202408192135230.png",alt:""}})]),s._v(" "),t("p",[s._v("如果同时需要执行大量的命令，那么就要等待上一条命令应答后再执行，这中间不仅仅多了RTT（Round Time Trip），而且还频繁调用系统IO，发送网络请求，同时需要redis调用多次read()和write()系统方法，系统方法会将数据从用户态转移到内核态，这样就会对进程上下文有比较大的影响了，性能不太好，o(╥﹏╥)o")]),s._v(" "),t("h2",{attrs:{id:"_1-定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义"}},[s._v("#")]),s._v(" 1.定义")]),s._v(" "),t("p",[s._v("管道(pipeline)可以一次性发送多条命令给服务端，服务端依次处理完完毕后，通过一条响应一次性将结果返回，通过减少客户端与redis的通信次数来实现降低往返延时时间。pipeline实现的原理是队列，先进先出特性就保证数据的顺序性。")]),s._v(" "),t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-piple202408192136138.png"}}),s._v(" "),t("p",[s._v("Pipeline是为了解决RTT往返回时，仅仅是将命令打包一次性发送，对整个Redis的执行不造成其它任何影响")]),s._v(" "),t("p",[t("strong",[s._v("批处理命令变种优化措施")]),s._v("，，类似Redis的原生批命令(mget和mset)")]),s._v(" "),t("h2",{attrs:{id:"_2-演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-演示"}},[s._v("#")]),s._v(" 2.演示")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost redis-7.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat cmd.txt")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v100\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v200\nhset k3 name zs\nhset k3 age "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nlpush liset1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost redis-7.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat cmd.txt | ./src/redis-cli -a 123456abc --pip")]),s._v("\nUnrecognized option or bad number of args for: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--pip'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost redis-7.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat cmd.txt | ./src/redis-cli -a 123456abc --pipe")]),s._v("\nWarning: Using a password with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-a'")]),s._v(" or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-u'")]),s._v(" option on the "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" line interface may not be safe.\nAll data transferred. Waiting "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the last reply"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nLast reply received from server.\nerrors: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", replies: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"_3-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[s._v("#")]),s._v(" 3.总结")]),s._v(" "),t("ul",[t("li",[s._v("Pipeline与原生批量命令对比\n"),t("ul",[t("li",[s._v("原生批量命令是原子性(例如:mset, mget)，"),t("strong",[s._v("pipeline是非原子性")])]),s._v(" "),t("li",[s._v("原生批量命令一次只能执行一种命令，pipeline支持批量执行不同命令")]),s._v(" "),t("li",[s._v("原生批命令是服务端实现，而pipeline需要服务端与客户端共同完成")])])]),s._v(" "),t("li",[s._v("Pipeline与事务对比\n"),t("ul",[t("li",[s._v("事务具有原子性，管道不具有原子性")]),s._v(" "),t("li",[s._v("管道一次性将多条命令发送到服务器，事务是一条一条的发，事务只有在接收到exec命令后才会执行，管道不会")]),s._v(" "),t("li",[s._v("执行事务时会阻塞其他命令的执行，而执行管道中的命令时不会")])])]),s._v(" "),t("li",[s._v("使用Pipeline注意事项\n"),t("ul",[t("li",[s._v("pipeline缓冲的指令只是会依次执行，不保证原子性，如果执行中指令发生异常，将会继续执行后续的指令")]),s._v(" "),t("li",[s._v("使用pipeline组装的命令个数不能太多，不然数据量过大客户端阻塞的时间可能过久，同时服务端此时也被迫回复一个队列答复，占用很多内存")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);