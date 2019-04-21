# webpack的配置文件

webpack有自己的默认配置文件，当没有webpack.config.js的时候webpack使用它默认配置
如果不是webpack.config.js 默认配置文件，想之定义配置文件名称，
则运行时：npx webpack --config 文件，手动指定打包配置文件(一般不建议更改默认名称)

webpack是局部安装的，为什么能npm run bundle？ 因为安装了webpack-cli，他可以在cmd中正确运行webpack命令
- scripts 中配置 "bundle":""webpack"  => npm run bundle
