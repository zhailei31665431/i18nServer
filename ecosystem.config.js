module.exports = {
  apps: [
    {
      name: 'i18n',      //应用名
      script: './src/main.js',   //应用文件位置
      instances: "max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
      instance_var: "INSTANCE_ID",
      exec_mode: "cluster",
      // env: {
      //   PM2_SERVE_PORT: 4000,   //静态服务器访问端口
      //   NODE_ENV: 'development' //启动默认模式
      // },
      watch: [
        "src",
      ],  //监听模式，不能单纯的设置为true，易导致无限重启，因为日志文件在变化，需要排除对其的监听
      merge_logs: true,         //集群情况下，可以合并日志
    }
  ]
};