var redis = require("redis"),
  RDS_PORT = 6379,
  RDS_HOST = "127.0.0.1",
  RDS_OPTS = {},
  client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on("ready", function (res) {
  console.log("ready");
});

client.set("str1", "str1wewe", redis.print);
client.get("str1", function (err, reply) {
  console.log(reply);
});
