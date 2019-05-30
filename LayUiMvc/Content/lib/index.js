//自定义一个layui模块   对外调用模块名为index
layui.define('layer', function (exports) {
    var layer = layui.layer;

    var index = {
        showDialog: function (msg) {
            layer.msg(msg);
        }
    }
    //对外输出接口
    exports('index', index);
    //自动加载页面记录的模块

    //if (layui.cache.module) {
    //    var moduleName = layui.cache.moduleName;

    //    var extentd ={ };
    //    extentd[moduleName] = 'lib/modules/' + moduleName;
    //    //动态加载模块
    //    layui.extend(extentd).use(moduleName); 
    //}
})



//自定义一个layui模块
layui.define('layer', function (exports) {
    var layer = layui.layer;

    var index = {
        showDialog: function (msg) {
            layer.msg(msg);
        }
    }
    //对外输出接口
    exports('index2', index);
    //自动加载页面记录的模块

    //if (layui.cache.module) {
    //    var moduleName = layui.cache.moduleName;

    //    var extentd ={ };
    //    extentd[moduleName] = 'lib/modules/' + moduleName;
    //    //动态加载模块
    //    layui.extend(extentd).use(moduleName); 
    //}
})