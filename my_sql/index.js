//引入mysql 模块
const mysql = require("mysql");

// 创建数据库连接对象
const connection = mysql.createConnection({
  host: "localhost", // 主机
  port: "3306", // 端口号
  user: "root", // 用户名
  password: "123mysql", // 密码
  database: "blogs", // 数据库名
});

// 创建连接
connection.connect((error) => {
  if (error) {
    console.log("连接出错，出错信息：", error);
    console.log(error);
  } else {
    console.log("mysql 连接成功");
  }
});

// 关闭数据库连接
connection.end();

// 强制关闭 不推荐使用
// connection.destroy();
