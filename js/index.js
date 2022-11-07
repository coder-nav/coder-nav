var serachList = document.getElementById("serach-list");
var index = -1;
var helangSearch = {
    els:{},
    searchIndex:0,
    hot:{
        // 导航列表
        list:[
            [-1, '--------------------------------------------------------------', ''],
            [0, 'CSDN - 专业开发者社区', 'https://blog.csdn.net/'],
            [0, 'AcWing - 算法练习平台', 'https://www.acwing.com/problem/'],
            [0, 'Leetcode - 全球极客挚爱的技术成长平台', 'https://leetcode.cn/problemset/all/'],
            [0, 'Imooc - 慕课网', 'https://www.imooc.com/'],
            [0, 'Runoob - 菜鸟教程', 'https://www.runoob.com/'],
            [0, 'Bilibili - 哔哩哔哩大学', 'https://www.bilibili.com/'],
            [0, 'W3school - Web技术教程', 'https://www.w3school.com.cn/'],
            [0, 'Gitee - 基于Git的代码托管研发平台', 'https://gitee.com/'],
            [0, 'Github - Where the world builds software', 'https://github.com/'],
            [-1, '---------------------------工具类---------------------------', ''],
            [0, '1010 在线超清影视网站', 'https://www.1010dy3.com/'], // https://www.fabu1010.com
            [0, 'VIP 在线视频解析', 'http://tool.liumingye.cn/video/'],
            [0, 'Lightly 在线编辑器', 'https://lightly.teamcode.com/dashboard'],
            [0, 'Photopea 在线PS', 'https://www.gaituya.com/ps/'],
            [0, 'ProcessOn 免费在线作图', 'https://www.processon.com/diagrams'],
            [0, 'MD5 加密工具', 'https://tool.chinaz.com/tools/md5.aspx'],
            [0, 'Cron 表达式生成器', 'https://www.toolscat.com/dev/cron'],
            [0, 'Hexconvert 进制转换', 'https://tool.lu/hexconvert'],
            [0, 'Timestamp 时间戳转换工具', 'https://tool.lu/timestamp/'],
            [0, '正则表达式可视化', 'https://www.toolscat.com/dev/regex-view'],
            [0, '正则表达式测试工具', 'https://tool.lu/regex/'],
            [0, '草料二维码生成器', 'https://cli.im/'],
            [0, '优设配色推荐导航', 'https://color.uisdc.com/pick.html'],
            [0, 'RGB 颜色代码生成器', 'https://htmlcolorcodes.com/color-picker/'],
            [0, 'Postman 接口调试工具', 'https://www.toolscat.com/dev/postman'],
            [0, 'SQL 转 JavaBean', 'https://www.toolscat.com/db/sql-java'],
            [0, 'Json 转 JavaBean', 'https://www.toolscat.com/json/json-java'],
            [0, 'jQuery 插件库', 'https://www.jq22.com/'],
            [0, 'ECharts 开源可视化图表库', 'https://echarts.apache.org/examples/zh/index.html'],
            [0, 'iLovePDF 在线工具', 'https://www.ilovepdf.com/'],
            [0, 'QQ 邮箱', 'http://mail.qq.com/'],
            [0, '163 邮箱', 'http://mail.163.com/'],
            [0, '阿里云-网盘', 'https://www.aliyundrive.com/drive'],
            [0, '阿里云 Maven 仓库', 'https://developer.aliyun.com/mvn/guide'],
            [0, '网易云 Docker 镜像中心', 'https://c.163yun.com/hub#/home'],
            [0, 'iconfont-阿里巴巴矢量图标库', 'https://www.iconfont.cn/'],
            [0, 'Data Structure Visualizations', 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html'],
            [-1, '---------------------------文档类---------------------------', ''],
            [0, 'DophinPHP 开发手册', 'https://www.kancloud.cn/ming5112/dolphinphp/256299'],
            [0, 'ThinkPHP 开发手册', 'https://www.kancloud.cn/manual/thinkphp5/118003'],
            [0, 'RuoYi 若依开发文档', 'https://doc.ruoyi.vip/ruoyi-vue/'],
            [0, '微信官方文档', 'https://developers.weixin.qq.com/doc/'],
            [0, '支付宝开发文档', 'https://open.alipay.com/developmentDocument.htm'],
            [0, 'Vue3 中文文档', 'https://www.javascriptc.com/vue3js/'],
            [0, 'Node.js 菜鸟教程', 'https://www.runoob.com/nodejs/nodejs-tutorial.html'],
            [0, 'ElementUI 文档', 'https://element-plus.org/zh-CN/#/zh-CN'],
            [0, 'MySQL 命令汇总', 'https://blog.csdn.net/weixin_47600880/article/details/120470670'],
            [0, 'Redis 命令手册', 'https://www.redis.net.cn/order/'],
            [0, 'HTTP 状态码详解', 'https://www.toolscat.com/wiki/http'],
            [0, 'ASCII 码对照表', 'https://www.toolscat.com/wiki/ascii'],
            [0, 'HTML 特殊转义字符对照表', 'https://www.toolscat.com/wiki/html'],
            [0, 'Content-Type参照表', 'https://www.toolscat.com/wiki/http-content-type'],
            [0, 'Git 提交规范', 'https://zhuanlan.zhihu.com/p/67804026'],
            [0, 'Git 命令汇总', 'https://blog.csdn.net/weixin_47600880/article/details/117828291'],
            [0, 'Linux 命令摘抄', 'https://blog.csdn.net/weixin_47600880/article/details/119645212'],
            [0, 'vi/vim 快速上手', 'https://blog.csdn.net/weixin_47600880/article/details/119744260'],
            [0, 'SpringBoot 开源电子书', 'https://www.cntofu.com/book/87/index.html'],
            [0, 'Sharding-JDBC 官方文档', 'https://shardingsphere.apache.org/document/legacy/4.x/document/cn/overview/'],
            [0, 'Java 面试题十万字总结', 'https://www.aliyundrive.com/s/Sgy5cydiDsH'],
            [0, 'Learning Git Branching', 'https://learngitbranching.js.org/'],
            [0, 'The Linux Command Line 中文版', 'https://www.kancloud.cn/thinkphp/linux-command-line/39431'],
            [-1, '---------------------------软件类---------------------------', ''],
            [0, 'Chrome 谷歌浏览器', 'https://www.google.cn/chrome/'],
            [0, 'Git 官方下载链接', 'https://git-scm.com/download'],
            [0, 'Postman API接口测试神器', 'https://www.postman.com/downloads/'],
            [0, 'Typora 免费版（Windows）', 'http://www.itmind.net/13398.html'],
            [0, 'Sublime 超轻量级文本编辑器', 'https://www.sublimetext.com/'],
            [0, 'VS Code 最受欢迎的的编辑器', 'https://code.visualstudio.com/'],
            [0, 'NxShell 跨平台SSH终端工具', 'https://apps.microsoft.com/store/detail/nxshell/9N0NP4JJ192W?hl=zh-cn&gl=cn'],
            [0, 'IntelliJ IDEA 破解教程', 'https://www.exception.site/article/29'],
            [0, 'DataGrip 破解教程', 'https://www.exception.site/essay/datagrip-2022-pojie'],
            [0, 'ToDesk 远程控制软件', 'https://www.todesk.com/'],
            [0, 'Redis 官方可视化工具', 'https://redis.com/redis-enterprise/redis-insight/'],
            [0, 'WPS Office 个人版', 'https://www.wps.cn/product/wps2016/'],
            [0, 'Visual-NMP-集成环境', 'https://www.jb51.net/softs/576491.html'],
            [0, 'AdBlock 广告拦截插件', 'https://adblockplus.org/zh_CN/'],
            [0, 'PhpStorm 破解教程', 'http://www.itmind.net/46245.html'],
            [0, 'Xshell7 + Xftp7 免费版', 'http://www.itmind.net/12766.html'],
            [0, 'Navicat 破解版（激活码）', 'http://www.itmind.net/12557.html'],
            [0, 'Office2013 激活', 'http://www.itmind.net/13009.html'],
            [0, 'Shadowsocks VPN 翻墙软件', 'https://pan.baidu.com/s/1XfNrh8CWlweuoGyKvWJv6g?pwd=zmg1'], // https://github.com/Alvin9999/new-pac/wiki
            [-1, '--------------------------------------------------------------', ''],
        ],
        // 搜索引擎
        href: [
            'https://cn.bing.com/search?q=',
            'https://fanyi.sogou.com/text?keyword=',
            'https://linux.cmsblogs.cn/list.html#!kw=',
            'https://search.gitee.com/?q=',
            'https://github.com/search?q=',
        ]
    },
    /* 初始化 */
    init:function(){
        // 聚焦input
        document.getElementById("search-input").focus();
        // 搜索框上的logo
        var logo = document.getElementById("logo");
        logo.style.backgroundImage = "url(img/logo" + Math.floor(Math.random()*10) + ".gif)";
        var _this = this;
        this.els={
            pickerBtn:$(".picker"),
            pickerList:$(".picker-list"),
            logo:$(".logo"),
            hotList:$(".hot-list"),
            input:$("#search-input"),
            button:$(".search")
        };

        /* 设置热门搜索列表 */
        setSearchList(_this, _this.hot.list);

        /* 注册事件 */
        /* 搜索类别选择按钮 */
        this.els.pickerBtn.click(function () {
            if(_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                },100);
            }
        });

        /* 搜索类别选择列表 */
        this.els.pickerList.on("click",">li",function () {
            _this.els.logo.css("background-image",('url(img/'+$(this).data("logo")+')'));
            _this.searchIndex=$(this).index();
            _this.els.pickerBtn.html($(this).html())
        });

        /* 搜索 输入框 点击*/
        this.els.input.click(function () {
            setTimeout(function () {
                _this.els.hotList.show();
            },100);
        });

        /* 搜索 输入框 输入*/
        this.els.input.on("input",function () {
            _this.els.hotList.show();
            index = -1;
            if($(this).val()){
                // 搜索预览
                var hotList = _this.hot.list;
                var serachList = new Array();
                for(var i = 0; i < hotList.length; i++) {
                    var flag = getSimilarity(hotList[i][1], $(this).val());
                    if(flag && hotList[i][0] != -1) {
                        // 设置匹配度排序权值
                        hotList[i][0] = flag; 
                        serachList.push(hotList[i]);
                    }
                }
                // 根据权值快排
                serachList = quickSort(serachList);
                if (!serachList.length) {
                    _this.els.hotList.hide();
                }
                setSearchList(_this, serachList);
            } else {
                setSearchList(_this, _this.hot.list);
            }
        });

        /* 文档 */
        $(document).click(function () {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });

        /* 搜索按钮 */
        this.els.button.click(function () {
            window.location.href = _this.hot.href[_this.searchIndex] + _this.els.input.val();
        });
        $('#search-input').bind('keypress', function (event) {
            if(event.keyCode == 13) {
            window.location.href = _this.hot.href[_this.searchIndex] + _this.els.input.val();            }
        });
    }
};

/** 按键监听 */
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    // 输入框获取焦点
    if(index == -1) {
        document.getElementById("search-input").focus();
    }
    // ctrl + 回车 切换搜索引擎
    if(e.ctrlKey && e.keyCode == 13) {
        var engine = document.getElementById('engine').getElementsByTagName('li');
        helangSearch.searchIndex = 
            helangSearch.searchIndex == 
                helangSearch.hot.href.length - 1 ? 0 : helangSearch.searchIndex + 1;
        for(var i = 0; i < helangSearch.hot.href.length; i++) {
            if(i == helangSearch.searchIndex) {
                helangSearch.els.pickerBtn.html(engine[i].innerText);
            }
        }
    }
    // esc 隐藏导航列表
    if(e.keyCode == 27) {
        index = -1;
        helangSearch.els.hotList.hide();
    }
    // ↑ ↓ 显示导航列表/选择导航
    if(e.keyCode == 38 || e.keyCode == 40) {
        var as = document.getElementById("hot-list").getElementsByTagName("a");
        helangSearch.els.hotList.show();
        if(e.keyCode == 38) {
            index = index > -1 ? index - 1 : -1;
        } else {
            index = index < as.length - 1 ? index + 1 : as.length - 1; 
        }
        index == -1 ? document.getElementById("search-input").focus() : as[index].focus();
    }
}

/** 设置搜索导航列表 */
function setSearchList(helangSearch, serachList) {
    helangSearch.els.hotList.html(function () {
        var str='';
        $.each(serachList, function (index,item) {
            var ico = "https://api.qqsuu.cn/api/favicon/get.php?url=" + item[2];
            str +='<a href="' + item[2] + '">';
            str +='<div class="number" style="color: #6BB0EC">'+(index+1)+'</div>';
            str += item[2] != '' ? "<img onerror='imgerrorfun();' style='width: 18px; height: 18px; float: left; padding: 5px; border-radius: 100%' src=" + ico + ">" : '';
            str +='<div style="color: #6b6e74">' + item[1] + '</div>';
            str +='</a>';
        });
        return str;
    });
}

/** 图片无法正常显示使用默认图片 */
function imgerrorfun(){ 
    var img = event.srcElement; 
    img.src = "favicon.ico";
    img.onerror = null; 
} 

/** 获取两个字符串的相似度 */
function getSimilarity(str1, str2) {
    let sameNum = 0;
    for (let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++){
            if(str1[i].toLowerCase() === str2[j].toLowerCase()) {
                sameNum++;
                break
            }
        }
    }
    let length = str1.length > str2.length ? str1.length : str2.length;
    return (sameNum/length) * 100 || 0;
}

/** 根据权值快排 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] >= pivot[0]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};