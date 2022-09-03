const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "blogs";

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error("mongodn connect error", err);
    return;
  }
  console.log("mongodb connect success");

  // 切换到数据库
  const db = client.db(dbName);
  console.log(db);
  // 关闭连接
  client.close();
});
