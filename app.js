const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./router");

const app = express();

app.use((req, res, next) => {
  //设置请求头
  res.set({
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": 1728000,
    "Access-Control-Allow-Origin": req.headers.origin || "*",
    "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "Content-Type": "application/json; charset=utf-8",
  });
  req.method === "OPTIONS" ? res.status(204).end() : next();
});

app.use(express.json());
app.use(cors());

app.use("/api", weatherRoutes);

app.listen(4000, () => console.log(`服务器启动成功, 监听 ${4000} 端口`));
