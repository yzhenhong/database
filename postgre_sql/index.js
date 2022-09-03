const pg = require("pg");

//创建链接对象
const con = {
  host: "localhost",
  user: "postgres",
  password: "123mysql",
  port: "5432",
  database: "postgres",
};

const pool = new pg.Pool(con);
pool.connect(function (err) {
  if (err) {
    return console.error("数据库连接出错", err);
  }
  return console.log("数据库连接成功");
});
